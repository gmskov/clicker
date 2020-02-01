import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stage:string = 'start';

  changeStage(stage: string){
    this.stage = stage;
  }
}
