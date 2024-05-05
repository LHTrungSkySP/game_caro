import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-box-info',
  standalone: true,
  imports: [],
  templateUrl: './box-info.component.html',
  styleUrl: './box-info.component.scss'
})
export class BoxInfoComponent {
  @Input() playerId!: number;
  @Input() playerNo!: number;

  playerInfo: any;
  constructor(){
    if(this.playerNo = 1){
      this.playerInfo = playerO;
    }else{
      this.playerInfo = playerX;
    }
  }
}

const playerO = {
  playerId: 1,
  playerNo: 1,
  winRate: 50,
  rank: 124,
  battleNumber: 53
}

const playerX = {
  playerId: 2,
  playerNo: 2,
  winRate: 50,
  rank: 124,
  battleNumber: 53
}
