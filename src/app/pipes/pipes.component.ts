import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'maracuya',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  randomText: string;

  rightNow: Date = new Date();

  currentBitCoinInvestment: number = 100000;

  constructor() { }

  ngOnInit() {
  }


  addOneHour() {
    // Make a copy of the date
    let updated = new Date(this.rightNow);

    // Increase the hours of the copy
    updated.setHours(this.rightNow.getHours() + 1);

    // Save the copy in the class
    this.rightNow = updated;
  }
}
