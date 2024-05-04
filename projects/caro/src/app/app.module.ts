import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ArenaComponent } from './components/arena/arena.component';
import { BoardGameComponent } from './components/board-game/board-game.component';
import { BoxInfoComponent } from './components/box-info/box-info.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AppModule { }
