import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WaitingHallComponent } from './waiting-hall.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: '',
          component: WaitingHallComponent
        }
      ]
    )
  ]
})
export class WaitingHallModule { }
