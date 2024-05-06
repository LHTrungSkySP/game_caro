import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Constants } from '../../shared/constants/constants';
@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss'
})
export class CountdownTimerComponent implements OnInit {
  @Input() status = true;
  @Output() notiEndTime = new EventEmitter();

  minutes: number = Constants.GAME_TIME.EASY;
  seconds: number = 0;
  intervalId: any;

  constructor() { }

  ngOnInit(): void {

  }
  ngOnChanges(){
    if(this.status){
      this.startCountdown();
    } else {
      this.stopCountdown();
    }
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
      this.notiEndTime.emit();
    }
  }
  stopCountdown(){
    clearInterval(this.intervalId);
  }
  startCountdown(){
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }
}
