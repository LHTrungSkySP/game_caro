import { Component, OnInit } from '@angular/core';
import { BoardGameComponent } from '../board-game/board-game.component';
import { BoxInfoComponent } from '../box-info/box-info.component';
import { Constants } from '../../shared/constants/constants';

@Component({
  selector: 'app-arena',
  standalone: true,
  imports: [BoardGameComponent, BoxInfoComponent],
  templateUrl: './arena.component.html',
  styleUrl: './arena.component.scss'
})
export class ArenaComponent implements OnInit {
  levelGame = Constants.GAME_LEVEL.EASY;
  constructor(){}
  ngOnInit(): void {
  }
}
