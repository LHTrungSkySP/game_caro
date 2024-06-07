import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DragDropModule } from 'primeng/dragdrop';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, DragDropModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  listSource: Container = new Container(
    1,
    [
      { id: '1', name: 'phan tu 1'},
      { id: '2', name: 'phan tu 2'},
      { id: '3', name: 'phan tu 3'},
      { id: '4', name: 'phan tu 4'},
    ]
  )
  listTarget: Container = new Container(2, [])
  listTargetB: Container = new Container(3, [])

  listManage: Container[] = [];
  listTemp: Container | null = null; // data đang được kéo thả
  constructor() {
    this.listManage = [this.listSource, this.listTarget, this.listTargetB]
  }
  dragStart(item: any, id: number) {
    this.listTemp = new Container(id, [item]);
  }

  drop(id: number, item: any = {}, itemDraping: any) {
    if (this.listTemp) {
      let target = this.listManage.find((e: Container) => e.id === id); // list được thả data
      let source = this.listManage.find((e: Container) => e.id === itemDraping.id); // list chứa data

      let indexItemSource = source?.items.indexOf(itemDraping.items[0]) ?? 0; // index của item đang draping trong source 
      let indexItemTarget = target?.items.indexOf(item) ?? 0; // index của item bị thay thế trong target 

      source?.items.splice(indexItemSource, 1);
      target?.items.splice(indexItemTarget, 0, itemDraping.items[0])
      this.listTemp = null;
    }
  }

  dragEnd() {
    this.listTemp = null;
  }

}
class Container {
  id: number;
  items: any[];
  constructor(id: number, items: any[]) {
    this.id = id;
    this.items = items;
  }
}
