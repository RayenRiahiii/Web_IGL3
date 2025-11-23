import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score-component.html',
  styleUrls: ['./score-component.css']
})
export class ScoreComponent {
  @Input() score: number = 0;
  @Input() bonnesReponses: number = 0;
  @Input() mauvaisesReponses: number = 0;
}