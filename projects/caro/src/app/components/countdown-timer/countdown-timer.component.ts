import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss'
})
export class CountdownTimerComponent implements OnInit {

  minutes!: number;
  seconds!: number;
  intervalId: any;

  constructor() { }

  ngOnInit(): void {
    // Thiết lập thời gian ban đầu (2 phút)
    this.minutes = 2;
    this.seconds = 0;

    // Cập nhật đồng hồ đếm ngược mỗi giây
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  ngOnDestroy(): void {
    // Hủy bỏ interval khi component bị hủy
    clearInterval(this.intervalId);
  }

  updateCountdown(): void {
    // Giảm số giây còn lại
    this.seconds--;

    // Nếu số giây dưới 0, giảm số phút và đặt lại số giây
    if (this.seconds < 0) {
      this.minutes--;
      this.seconds = 59;
    }

    // Kiểm tra nếu thời gian đã hết
    if (this.minutes === 0 && this.seconds === 0) {
      clearInterval(this.intervalId); // Dừng đồng hồ đếm ngược
    }
  }
}
