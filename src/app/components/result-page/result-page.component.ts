import { Component, OnInit } from '@angular/core';
import { GameServiceService } from '../../services/game-service.service'
import { EventEmitter, Output } from '@angular//core';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  userName;
  score;
  message;
  myRank = false;
  usersRank = false;
  rankList: Array<any>;
  usersRankList: Array<any>;
  localStorageResults;

  constructor(private gs: GameServiceService) {
    this.userName = this.gs.getName();
    this.score = this.gs.getScore();
    this.showMessage();
    this.localStorageResults = this.gs.getResultFromStorage();

  }
  @Output() stageFinish = new EventEmitter();


  showMessage(): void {
    if(+this.score < 20){
      this.message = 'You can be better !!!';
    }
    if(+this.score == 0){
      this.message = 'Time out !!! Try again and maybe you will be best of the best.';
    }
    if(+this.score >= 20){
      this.message = 'Oh. Yo mega monster in this game!!!';
    }
  }

  showRating(): void {
    this.initRankList();
    this.myRank = true;
    this.usersRank = false;
  }

  showUsersRating(): void{
    this.initUsersRankList();
    this.myRank = false;
    this.usersRank = true;
  }

  playAgainClick(): void{
    this.stageFinish.emit('game');
  }
  exit(): void{
    this.stageFinish.emit('start');
  }

  initRankList(){
    let user = this.localStorageResults.find(item => item.name === this.gs.getName());
    user.results.sort((a, b) => a.score < b.score ? 1 : -1);
    this.rankList = user.results
  }

  initUsersRankList(){
    let userResults = this.localStorageResults;
    let userIndex = this.localStorageResults.findIndex(item => item.name === this.gs.getName());
    userResults[userIndex].active = true;

    let usersRankList = userResults.map(function(elm) {
      elm.results.sort((a, b) => a.score < b.score ? 1 : -1);
      elm.score = elm.results[0].score;
      return elm;
    });
    this.usersRankList = usersRankList.sort((a, b) => a.score < b.score ? 1 : -1);
  }

  ngOnInit() {
  }

}
