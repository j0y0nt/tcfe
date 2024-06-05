import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Taco Cloud';
  constructor(private router: Router) {

  }
  authenticated(): boolean {
    return localStorage.getItem('currentUser') != null;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }
}
