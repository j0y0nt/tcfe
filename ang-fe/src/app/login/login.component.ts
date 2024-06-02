import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authService: UserAuthService = inject(UserAuthService);

  constructor(
    private router: Router ) {

    }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
});

login() {
  let username = this.loginForm.value.username;
  let password = this.loginForm.value.password;
  this.authService.login(username, password);
  console.log(username + '  ' + password);
  this.router.navigate(['/design', { }]);
};
}
