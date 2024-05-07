import { Component, OnInit } from '@angular/core';
import { BoardGameComponent } from '../board-game/board-game.component';
import { BoxInfoComponent } from '../box-info/box-info.component';
import { Constants } from '../../shared/constants/constants';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';
import { BoxChatComponent } from '../box-chat/box-chat.component';

@Component({
  selector: 'app-arena',
  standalone: true,
  imports: [
    BoardGameComponent, 
    BoxInfoComponent, 
    CountdownTimerComponent,
    BoxChatComponent
  ],
  templateUrl: './arena.component.html',
  styleUrl: './arena.component.scss'
})
export class ArenaComponent implements OnInit {
  levelGame = Constants.GAME_LEVEL.EASY;
  timerPlay_X = true;
  timerPlay_O = false;
  constructor(){}
  ngOnInit(): void {
  }
  handleCountDown(){
    if(this.timerPlay_X !== this.timerPlay_O){
      this.timerPlay_X = !this.timerPlay_X;
      this.timerPlay_O = !this.timerPlay_O;
    }
  }
  endGame(){
    this.timerPlay_X = false;
    this.timerPlay_O = false;
  }
}
