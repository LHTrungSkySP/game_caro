import { Component } from '@angular/core';
import { BoardGameComponent } from '../board-game/board-game.component';
import { BoxInfoComponent } from '../box-info/box-info.component';

@Component({
  selector: 'app-arena',
  standalone: true,
  imports: [BoardGameComponent, BoxInfoComponent],
  templateUrl: './arena.component.html',
  styleUrl: './arena.component.scss'
})
export class ArenaComponent {

}
