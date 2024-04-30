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
          loadChildren: () => import('./remote-entry/remote-entry.module').then(m => m.RemoteEntryModule)
        }
      ]
    )
  ]
})
export class AppModule { }
