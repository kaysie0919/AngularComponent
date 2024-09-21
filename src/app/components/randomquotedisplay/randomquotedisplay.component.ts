import { Component } from '@angular/core';

@Component({
  selector: 'app-randomquotedisplay',
  templateUrl: './randomquotedisplay.component.html',
  styleUrl: './randomquotedisplay.component.css'
})
export class RandomquotedisplayComponent {
  quotes: string[] = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Don't watch the clock; do what it does. Keep going.",
    "You miss 100% of the shots you don't take."
  ];

  randomQuote: string | null = null;

  displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.randomQuote = this.quotes[randomIndex];
  }

}
