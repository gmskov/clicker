import { Component, OnInit } from '@angular/core';
import { EventEmitter, Output } from '@angular//core';
import { GameServiceService } from '../../services/game-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  valid = true;
  name;
  constructor(private gs: GameServiceService, private router: Router) {}
  @Output() stageFinish = new EventEmitter();
  onClick(name:string){
    if(!name){
      this.valid = false;
      return;
    }
    this.gs.setName(name);
    this.router.navigate(['play']);
  }
  ngOnInit() {
  }

}
