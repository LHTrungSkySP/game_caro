import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
