import { Component, OnInit } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { rollIn } from 'ng-animate';

@Component({
  selector: 'app-sreen-first',
  templateUrl: './sreen-first.component.html',
  styleUrls: ['./sreen-first.component.css'],
  animations: [
    trigger('rollIn', [transition('* => *', useAnimation(rollIn))])
  ],
})
export class SreenFirstComponent implements OnInit {
  rollIn: any;
  constructor() { }

  ngOnInit() {
  }

}
