import { Injectable } from '@angular/core';
import * as moment from 'moment';

interface IResults {
  date: string,
  score: number
}

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  table;
  score;
  name;

  constructor() {
    this.initLocalStorage();
  }

  setName(name: string): void{
    this.name = name;
  }
  getName(): string{
    return this.name;
  }

  getScore(): void {
    return this.score;
  }

  saveScore(score: number): void {
    this.score = score;
    this.table = this.getResultFromStorage();

    let userScore: IResults = {
      date: moment().format('MM.DD.YYYY (HH:mm:ss)'),
      score: score
    };
    let user;
    let userIndex = this.indexUserInLocalStorage();
    if(userIndex == -1) {
      user = {
        "name": this.name,
        "results":[ userScore ]
      };
      this.table.push(user);
    }
    else {
      this.table[userIndex].results.push(userScore);
    }
    localStorage.setItem('table', JSON.stringify(this.table));
  }

  initLocalStorage(): void{
    if(!localStorage.getItem('table')){
      localStorage.setItem('table', '[]');
    }
  }

  indexUserInLocalStorage(): number{
    if(!this.table.length){
      return -1;
    }
    else{
      return this.table.findIndex(item => item.name === this.name);
    }
  }

  getResultFromStorage():any{
    return JSON.parse(localStorage.getItem('table'));
  }
}
