import {Component, Input } from '@angular/core';
import {PlayerMove} from "../../models/player-move";

@Component({
  selector: 'game-btn',
  templateUrl: './game-btn.component.html',
  styleUrls: ['./game-btn.component.css']
})
export class GameBtnComponent {
  @Input() public move: PlayerMove;
  @Input() public disabled: boolean;
}
