import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title = 'unitTesing';
  studentResult!: string;
  constructor() { }
  object = {
    name: "Akhlaque"
  }
  variableTobe: any;
  count: number = 0;
  sum: number = 0;
  countNumber: number = 0;
  ngOnInit(): void {
  }
  Addition(a: number, b: number) {
    return a + b;
  }
  increaseCount(num: number) {
    this.count = this.count + num;
  }
  decreaseCount(num:number) {
    this.count = this.count - num;
  }
  calculate(num1: number, num2:number) {
    return this.sum = num1 + num2;
  }
  saveData(data: any) {
    let info = {
      sumValue:this.calculate(10,20),
    }
    this.saveDataMethodConsole(info);
  }
  saveDataMethodConsole(data: any) {
    console.log(data);
  }
  studentSchoolResult() {
   if(this.calculate(10,20)>=50) {
     return this.studentResult="Pass";
   } else {
     return  this.studentResult="Fail";
   }
  } 
  decreaseNumber() {
    this.countNumber -= 1;
  }
  increaseNumber() {
    this.countNumber += 1;
  
  }
  private privateMethod() {
    this.countNumber = 50;
    console.log('Private Method');
  }
}
