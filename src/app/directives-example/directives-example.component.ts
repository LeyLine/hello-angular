import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'banana',
  templateUrl: './directives-example.component.html',
  styleUrls: ['./directives-example.component.css']
})
export class DirectivesExampleComponent implements OnInit {
  headingColor: string = 'black';

  isBigSize: boolean = false;
  hasColor: boolean = false;
  isComic: boolean = true;

  dropdownSelection: string;

  constructor() { }

  // "ngOnInit()" will be called as soon as the component is loaded
  // it's good for any initial setup your component needs
  ngOnInit() {
      setInterval(() => {
          const r = Math.floor(Math.random() * 256);
          const g = Math.floor(Math.random() * 256);
          const b = Math.floor(Math.random() * 256);
          this.headingColor = `rgb(${r},  ${g},  ${b})`;
                          //  'rgb('+r+', '+g+', '+b+')'
      }, 5000);
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
