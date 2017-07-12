import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cherry-thang',
  templateUrl: './my-cool-bindings.component.html',
  styleUrls: ['./my-cool-bindings.component.css']
})
export class MyCoolBindingsComponent implements OnInit {
  feedbackMessage: string = 'Please click on these things.';
  imageUrl: string = 'https://media.giphy.com/media/26gsd2NcDEw4ESU7u/giphy.gif';
  clickCount: number = 0;

  isInputDisabled: boolean = false;
  buttonText: string = 'Disable The Input';

  // https://media.giphy.com/media/3og0IKWBUsRYQrqIH6/giphy.gif

  constructor() { }

  ngOnInit() {
  }

  changeTheImage() {
    // if current image is the 1st one...
    if (this.imageUrl === 'https://media.giphy.com/media/26gsd2NcDEw4ESU7u/giphy.gif') {
      // change it to the 2nd one
      this.imageUrl = 'https://media.giphy.com/media/3og0IKWBUsRYQrqIH6/giphy.gif';
    }

    else {
      // otherwise chant it back to the 1st one
      this.imageUrl = 'https://media.giphy.com/media/26gsd2NcDEw4ESU7u/giphy.gif';
    }

    this.clickCount += 1;
  } // close changeTheImage


  updateMessage() {
    this.feedbackMessage = 'Thanks for clicking!';
    this.clickCount += 1;
  } // close updateMessage


  toggleThatInput() {
    if (this.isInputDisabled === true) {
      this.isInputDisabled = false;
      this.buttonText = 'Disable This Input';
    }
    else {
      this.isInputDisabled = true;
      this.buttonText = 'Enable This Input';
    }
  } // close toggleThatInput
}
