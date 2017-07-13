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

  rockSearchText: string = "";
  theRocks: object[] = [
    {
      name: 'Wrestler The Rock',
      pictureUrl: 'https://media.giphy.com/media/l0NwPZ027mabR6Tg4/giphy.gif'
    },
    {
      name: 'Turtle Neck The Rock',
      pictureUrl: 'https://media.giphy.com/media/AjkKC77JZVCEg/giphy.gif'
    },
    {
      name: 'Fast and Furious The Rock',
      pictureUrl: 'https://media.giphy.com/media/3ohze2rUhUhNJQDdUk/giphy.gif'
    },
    {
      name: 'Gym The Rock',
      pictureUrl: 'https://media.giphy.com/media/2Faz8AWeOgrfO4FHi/giphy.gif'
    },
    {
      name: 'Scorpion King Rock',
      pictureUrl: 'https://media.giphy.com/media/Ls6ahtmYHU760/giphy.gif'
    },
    {
      name: 'Moana The Rock',
      pictureUrl: 'https://media.giphy.com/media/26ufbuJkdEJPKvQ9W/giphy.gif'
    }
  ];


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
