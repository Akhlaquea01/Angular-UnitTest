import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  name: string = "Akhlaque";
  number: number = 8797247279;
  DOB: number = 140999;
  readonly: boolean = false;
  num: number = 20;
  redColor: string = "red";
  blueColor: string = "blue";
  constructor() { }

  ngOnInit(): void {
  }

}
