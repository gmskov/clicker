import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { environment as env } from '../../../environments/environment';
import { GameServiceService } from '../../services/game-service.service';
import { EventEmitter, Output } from '@angular//core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clicker-page',
  templateUrl: './clicker-page.component.html',
  styleUrls: ['./clicker-page.component.css']
})
export class ClickerPageComponent implements OnInit {
  gameDuration: number = env.GAME_DURATION_SECONDS;
  timer;
  score = 0;
  interval;
  play = false;

  constructor(private gs: GameServiceService, private router: Router) {
    this.timer = moment().startOf('day').seconds(this.gameDuration).format('H:mm:ss');
  }
  @Output() stageFinish = new EventEmitter();

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timer === '0:00:00'){
        this.gs.saveScore(this.score);
        clearInterval(this.interval);
        this.router.navigate(['result']);
        return;
      }
      this.timer = moment(this.timer, 'H:mm:ss')
                    .subtract(1, 'seconds')
                    .format('H:mm:ss')
    },1000)
  }
  startGame(){
    this.play = true;
    this.startTimer();
  }
  onClick(){
    this.score++;
  }


  ngOnInit() {
  }

}
