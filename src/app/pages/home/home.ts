import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  quotes = [
    "Every challenge is a chance to grow.",
    "Understanding begins with curiosity.",
    "Small steps lead to big achievements."
  ];
  currentQuoteIndex = 0;
  interval: any;

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentQuoteIndex = (this.currentQuoteIndex + 1) % this.quotes.length;
    }, 4000);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }
}
