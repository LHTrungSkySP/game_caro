import { Component } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
@Component({
  selector: 'app-box-chat',
  standalone: true,
  imports: [
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './box-chat.component.html',
  styleUrl: './box-chat.component.scss'
})
export class BoxChatComponent {
  emitted = false;
  dataMess = dataMess;
  onScroll(container: any, routeLoad: string): void {
    if ((container.offsetHeight + container.scrollTop + 1) >= container.scrollHeight && !this.emitted) {
      this.emitted = true;
      if(routeLoad === "current"){
        // this.lazyLoadActivityInWeek();
      }else if(routeLoad === "future"){
        // this.lazyLoadActivityInFuture();
      }else if(routeLoad === "pass"){
        // this.lazyLoadActivityInPass();
      }
    } else if ((container.offsetHeight + container.scrollTop + 1) < container.scrollHeight) {
      this.emitted = false;
    }
  }
}
const avatar1 ='https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no';
const avatar2 ='https://lh3.googleusercontent.com/pZwZJ5HIL5iKbA91UGMUIPR0VJWa3K0vOGzDZmY6wU3EJBUdfsby3VEyxU162XxTyOyP3D154tjkr-4Jgcx8lygYUR8eB-jVmld4dsHi1c-mE_A8jKccseAG7bdEwVrcuuk6ciNtSw=s170-no';

const playerO = {
  playerId: 1,
  playerNo: 1,
  winRate: 50,
  rank: 124,
  battleNumber: 53,
  avatar: avatar1
}

const playerX = {
  playerId: 2,
  playerNo: 2,
  winRate: 50,
  rank: 124,
  battleNumber: 53,
  avatar: avatar2
}

const dataMess = [
  {
    playerId: 1,
    playerNo: 1,
    content: 'Con chó này mày đánh hay đấy',
    time: '11h30',
    avatar: avatar1
  },
  {
    playerId: 2,
    playerNo: 2,
    content: 'CŨng bình thường thôi',
    time: '11h30',
    avatar: avatar2
  },
  {
    playerId: 2,
    playerNo: 2,
    content: 'Là do mày ngu á',
    time: '11h30',
    avatar: avatar2
  },
  {
    playerId: 1,
    playerNo: 1,
    content: 'Hãy tập trung vào trận đấu',
    time: '11h35',
    avatar: avatar1
  },
  {
    playerId: 2,
    playerNo: 2,
    content: 'Đánh chậm lại một chút',
    time: '11h35',
    avatar: avatar2
  },
  {
    playerId: 1,
    playerNo: 1,
    content: 'Cố gắng giữ khoảng cách',
    time: '11h40',
    avatar: avatar1
  },
  {
    playerId: 1,
    playerNo: 1,
    content: 'Hãy đẩy cao dòng chảy',
    time: '11h40',
    avatar: avatar1
  },
  {
    playerId: 1,
    playerNo: 1,
    content: 'Chơi an toàn',
    time: '11h45',
    avatar: avatar1
  },
  {
    playerId: 2,
    playerNo: 2,
    content: 'Tiến lên!',
    time: '11h45',
    avatar: avatar2
  },
  {
    playerId: 1,
    playerNo: 1,
    content: 'Hãy tận dụng cơ hội',
    time: '11h50',
    avatar: avatar1
  },
  {
    playerId: 1,
    playerNo: 1,
    content: 'Đánh phòng ngự tốt hơn',
    time: '11h50',
    avatar: avatar1
  }
]
