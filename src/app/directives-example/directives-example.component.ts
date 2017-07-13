import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'banana',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent implements OnInit {
  isBigSize: boolean = false;
  hasColor: boolean = false;
  isComic: boolean = true;

  dropdownSelection: string;

  constructor() { }

  ngOnInit() {
  }

  buttonA() {
    if (this.isBigSize === false) {
      this.isBigSize = true;
    }
    else {
      this.isBigSize = false;
    }
  }

  buttonB() {
    if (this.hasColor === false) {
      this.hasColor = true;
    }
    else {
      this.hasColor = false;
    }
  }

  buttonC() {
    if (this.isComic === false) {
      this.isComic = true;
    }
    else {
      this.isComic = false;
    }
  }
}
