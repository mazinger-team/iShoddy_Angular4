import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ishoddy-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

  @Input() reviews_number: number;
  @Input() rating: number;
  @Input() maxRating: number = 5;
  
  private stars: number[] = [];
  constructor() { }

  ngOnInit() {
    this.stars = this.paintStars(this.rating);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.stars = this.paintStars(this.rating);
  }    

  paintStars(value: number): number[] {
    var stars = [];

    for (let i=1; i<=this.maxRating; i++) {
      if (i <= this.rating) {
        stars.push(1);
      } else if ((i - this.rating) <= 0.5) {
        stars.push(0.5);
      } else {
        stars.push(0);
      }
    }

    return stars;

  }
}
