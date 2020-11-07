import { Component, OnInit } from '@angular/core';
import { GridPosition } from "../../models/grid-position";
import { PlayerMove, PlayerMoveConst } from "../../models/player-move";
import { Scores } from "../../models/scores";

@Component({
  selector: 'play-area',
  templateUrl: './play-area.component.html',
  styleUrls: ['./play-area.component.css']
})
export class PlayAreaComponent implements OnInit {

  private readonly winingLines = [
    // left <-> right
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // up <-> down
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6]
  ];

  // public for HTML Template.
  public gridPositions: GridPosition[];
  public currentPlayer: PlayerMove;
  public winner: boolean;
  public draw: boolean;
  public scores: Scores = { X: 0, O: 0 };


  public ngOnInit(): void {
    this.startNewGame();
  }

  public startNewGame(): void {
    this.currentPlayer = PlayerMoveConst.O;
    this.winner = this.draw = false;
    this.constructCleanPlayGrid();
  }

  private constructCleanPlayGrid(): void {
    this.gridPositions = [];

    for( let i = 0; i < 9; i++ ) {
      this.gridPositions.push({
        gridCoordinate: i,
        moveMade: null,
        disabled: false
      });
    }
  }

  public playerMove( idx: number ): void {
    // find the selected position & add the players move to its dto.
    const position = this.gridPositions.find( position => position.gridCoordinate === idx );
    position.moveMade = this.currentPlayer;
    position.disabled = true;
    this.checkForWinningLine();
    if( !this.winner ) this.togglePlayer();
  }


  private togglePlayer(): void {
    this.currentPlayer = this.currentPlayer === PlayerMoveConst.O ? PlayerMoveConst.X : PlayerMoveConst.O;
  }


  private checkForWinningLine(): void {
    // Build a list of all moves made by the current player.
     const playedPositions = this.gridPositions.filter( position => position.moveMade === this.currentPlayer )
       .map( position => position.gridCoordinate );

     // quick exit - game cannot be won if less than 3 moves have been made by a single player.
     if( playedPositions.length < 3 ) return;

     // Test for match win or draw.
     this.winingLines.forEach( line => {
       if(playedPositions.includes(line[0]) && playedPositions.includes(line[1]) && playedPositions.includes(line[2])){
         this.onWin();
       } else if( this.gridPositions.filter( pos => pos.moveMade ).length === 9 ) {
         this.draw = true;
       }
     });
  }


  private onWin(): void {
    this.winner = true;
    this.gridPositions.forEach( pos => pos.disabled = true );
    this.scores[this.currentPlayer] = this.scores[this.currentPlayer]+1;
  }

}
