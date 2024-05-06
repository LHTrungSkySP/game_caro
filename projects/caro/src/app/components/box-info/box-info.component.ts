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
  battleNumber: 53,
  avatar: 'https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no'
}

const playerX = {
  playerId: 2,
  playerNo: 2,
  winRate: 50,
  rank: 124,
  battleNumber: 53,
  avatar: 'https://lh3.googleusercontent.com/pZwZJ5HIL5iKbA91UGMUIPR0VJWa3K0vOGzDZmY6wU3EJBUdfsby3VEyxU162XxTyOyP3D154tjkr-4Jgcx8lygYUR8eB-jVmld4dsHi1c-mE_A8jKccseAG7bdEwVrcuuk6ciNtSw=s170-no'
}
