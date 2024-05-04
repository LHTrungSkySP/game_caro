import { Routes } from '@angular/router';
import { BoardGameComponent } from './components/board-game/board-game.component';
import { BoxInfoComponent } from './components/box-info/box-info.component';
import { ArenaComponent } from './components/arena/arena.component';

export const routes: Routes = [
    {
        path: '',
        children: [
          {
            path: '',
            // component: BoardGameComponent
            component: ArenaComponent
          }
        ]
    }
];

