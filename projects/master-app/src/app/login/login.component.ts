import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DragDropModule } from 'primeng/dragdrop';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet,DragDropModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fullList = [
    { id: '1', name: 'phan tu 1' },
    { id: '2', name: 'phan tu 2' }
  ]
  targetList = {
    id: 0,
    items: [{}]
  };
  draggedProduct: any[] = [];
  dragStart(product: any) {
    this.draggedProduct = product;
    console.log(this.draggedProduct);
    
  }

  drop(target: any[], source: any[]) {
    if (this.draggedProduct) {
      let draggedProductIndex = this.findIndex(this.draggedProduct,source);
      target.push(this.draggedProduct);
      source.splice(draggedProductIndex, 1)
      this.draggedProduct = [];
      
    }
  }

  dragEnd() {
    this.draggedProduct = [];
  }

  findIndex(product: any, list: any[]) {
    let index = -1;
    for (let i = 0; i < list.length; i++) {
      if (product.id === list[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
