import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {
          path: '',
          children: [
            {
              path: 'game-hall',
              loadChildren: () => import('../components/game-hall/game-hall.module').then(m => m.GameHallModule)
            },
            {
              path: 'waiting-hall',
              loadChildren: () => import('../components/waiting-hall/waiting-hall.module').then(m => m.WaitingHallModule)
            }
          ] 
        }
      ]
    )
  ]
})
export class RemoteEntryModule { }
