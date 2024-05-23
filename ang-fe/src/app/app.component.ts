import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecentTacosComponent } from './recent-tacos/recent-tacos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RecentTacosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Taco Cloud';
}
