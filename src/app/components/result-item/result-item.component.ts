import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular//core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})



export class ResultItemComponent implements OnInit {

  constructor() {}
  @Input() rankListItem: any;

  ngOnInit() {
  }

}
