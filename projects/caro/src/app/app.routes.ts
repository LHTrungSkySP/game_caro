import { Routes } from '@angular/router';
import { BoardGameComponent } from './components/board-game/board-game.component';

export const routes: Routes = [
    {
        path: '',
        children: [
          {
            path: '',
            component: BoardGameComponent
          }
        ]
    }
];

