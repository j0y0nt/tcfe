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
  loginError: boolean;
  errMsg : string;

  constructor(
    private router: Router ) {
      this.loginError = false;
      this.errMsg = '';
    }

  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
});

login() {
  
  let username = this.loginForm.value.username;
  let password = this.loginForm.value.password;

  this.authService.login(username, password).subscribe({
    next: (x) => {
      this.loginError = false;
      this.errMsg = '';
      console.log(x); 
      localStorage.setItem('currentUser', JSON.stringify(x));
      this.router.navigate(['/design', { }]);
    },
    error: (errResponse) => { 
      this.loginError = true;
      this.errMsg = errResponse.error.message;
      localStorage.removeItem('currentUser');
      console.log(errResponse.error.message); 
    }
  });

};
}
