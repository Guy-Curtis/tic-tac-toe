import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBtnComponent } from './components/game-btn/game-btn.component';
import { PlayAreaComponent } from './components/play-area/play-area.component';
import { ScoreBoardComponent } from './components/score-board/score-board.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBtnComponent,
    PlayAreaComponent,
    ScoreBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
