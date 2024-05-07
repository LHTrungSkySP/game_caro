import { Component } from '@angular/core';

@Component({
  selector: 'app-home-match',
  standalone: true,
  imports: [],
  templateUrl: './home-match.component.html',
  styleUrl: './home-match.component.scss'
})
export class HomeMatchComponent {
  data = data;
  onScroll(container: any, routeLoad: string): void {
    if ((container.offsetHeight + container.scrollTop + 1) >= container.scrollHeight) {
      if(routeLoad === "current"){
        // this.lazyLoadActivityInWeek();
      }else if(routeLoad === "future"){
        // this.lazyLoadActivityInFuture();
      }else if(routeLoad === "pass"){
        // this.lazyLoadActivityInPass();
      }
    }
  }
}
const avatar1 ='https://lh3.googleusercontent.com/ytP9VP86DItizVX2YNA-xTYzV09IS7rh4WexVp7eilIcfHmm74B7odbcwD5DTXmL0PF42i2wnRKSFPBHlmSjCblWHDCD2oD1oaM1CGFcSd48VBKJfsCi4bS170PKxGwji8CPmehwPw=w200-h247-no';
const avatar2 ='https://lh3.googleusercontent.com/pZwZJ5HIL5iKbA91UGMUIPR0VJWa3K0vOGzDZmY6wU3EJBUdfsby3VEyxU162XxTyOyP3D154tjkr-4Jgcx8lygYUR8eB-jVmld4dsHi1c-mE_A8jKccseAG7bdEwVrcuuk6ciNtSw=s170-no';

const data = [
  {
    id: 1,
    player_O: {
      id: 12,
      name: 'haha',
      top: 10,
      avatar: avatar1,
      winRate: 20
    },
    player_X: {
      id: 13,
      name: 'Trung',
      top: 20,
      avatar: avatar2,
      winRate: 20,
    }
  },
  {
    id: 2,
    player_O: {
      id: 14,
      name: 'Thari',
      top: 2,
      avatar: avatar2,
      winRate: 20,
    },
    player_X: {
      id: 15,
      name: 'Phu Le ha',
      top: 22,
      avatar: avatar1,
      winRate: 20,
    }
  },
  {
    id: 3,
    player_O: {
      id: 14,
      name: 'Thari',
      top: 2,
      avatar: avatar2,
      winRate: 20,
    },
    player_X: {
      id: 15,
      name: 'Phu Le ha',
      top: 22,
      avatar: avatar1,
      winRate: 20,
    }
  },
  {
    id: 4,
    player_O: {
      id: 14,
      name: 'Thari',
      top: 2,
      avatar: avatar2,
      winRate: 20,
    },
    player_X: {
      id: 15,
      name: 'Phu Le ha',
      top: 22,
      avatar: avatar1,
      winRate: 20,
    }
  },
  {
    id: 5,
    player_O: {
      id: 14,
      name: 'Thari',
      top: 2,
      avatar: avatar2,
      winRate: 20,
    },
    player_X: {
      id: 15,
      name: 'Phu Le ha',
      top: 22,
      avatar: avatar1,
      winRate: 20,
    }
  },
  {
    id: 6,
    player_O: {
      id: 14,
      name: 'Thari',
      top: 2,
      avatar: avatar2,
      winRate: 20,
    },
    player_X: {
      id: 15,
      name: 'Phu Le ha',
      top: 22,
      avatar: avatar1,
      winRate: 20,
    }
  },
  {
    id: 7,
    player_O: {
      id: 14,
      name: 'Thari',
      top: 2,
      avatar: avatar2,
      winRate: 20,
    },
    player_X: {
      id: 15,
      name: 'Phu Le ha',
      top: 22,
      avatar: avatar1,
      winRate: 20,
    }
  },
  {
    id: 8,
    player_O: {
      id: 14,
      name: 'Thari',
      top: 2,
      avatar: avatar2,
      winRate: 20,
    },
    player_X: {
      id: 15,
      name: 'Phu Le ha',
      top: 22,
      avatar: avatar1,
      winRate: 20,
    }
  }
]