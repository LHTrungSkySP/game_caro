import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'master-app';
  isDarkTheme: boolean = false;

  newIsDarkTheme = true; // hoặc false tùy thuộc vào yêu cầu
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

}
