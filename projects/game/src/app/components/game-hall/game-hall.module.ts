import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameHallComponent } from './game-hall.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: GameHallComponent
        }
      ]
    )
  ]
})
export class GameHallModule { }
