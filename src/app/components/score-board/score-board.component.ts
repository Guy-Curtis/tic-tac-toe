import {Component, Input } from '@angular/core';
import { Scores } from "../../models/scores";

@Component({
  selector: 'score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent {
  @Input() public scores: Scores;
}
