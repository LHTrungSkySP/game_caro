import { Component, OnInit } from '@angular/core';
import { BoardGameComponent } from '../board-game/board-game.component';
import { BoxInfoComponent } from '../box-info/box-info.component';
import { Constants } from '../../shared/constants/constants';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

@Component({
  selector: 'app-arena',
  standalone: true,
  imports: [BoardGameComponent, BoxInfoComponent, CountdownTimerComponent],
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
    this.timerPlay_X = !this.timerPlay_X;
    this.timerPlay_O = !this.timerPlay_O;
  }
  emitted = false;
  onScroll(container: any, routeLoad: string): void {
    if ((container.offsetHeight + container.scrollTop + 1) >= container.scrollHeight && !this.emitted) {
      this.emitted = true;
      if(routeLoad === "current"){
        // this.lazyLoadActivityInWeek();
      }else if(routeLoad === "future"){
        // this.lazyLoadActivityInFuture();
      }else if(routeLoad === "pass"){
        // this.lazyLoadActivityInPass();
      }
    } else if ((container.offsetHeight + container.scrollTop + 1) < container.scrollHeight) {
      this.emitted = false;
    }
  }
}
