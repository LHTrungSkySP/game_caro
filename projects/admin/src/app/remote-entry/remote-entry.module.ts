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
              path: 'account',
              loadChildren: () => import('../components/account/account.module').then(m => m.AccountModule)
            },
            {
              path: 'game',
              loadChildren: () => import('../components/game/game.module').then(m => m.GameModule)
            }
          ]
        }
      ]
    )
  ]
})
export class RemoteEntryModule { }
