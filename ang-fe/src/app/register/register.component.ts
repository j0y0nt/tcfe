import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { RegisterUserService } from '../register-user.service';
import { User } from '../user';
import { UserAddress } from '../user-address';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  
  registerService: RegisterUserService = inject(RegisterUserService);
  registrationForm: FormGroup;

  constructor() {
    this.registrationForm = new FormGroup({
      username: new FormControl('',[Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
      fullName: new FormControl(''),
      phoneNumber: new FormControl(''),
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(),
      country: new FormControl(''),
    });
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }
  

  registerUser() {
    console.warn(this.registrationForm.value);
    console.log('submitted.');
    if(this.registrationForm.invalid){
      return;
    } else {
      let user: User = { 
        username: this.registrationForm.value.username!,
        password: this.registrationForm.value.password!,
        confirmPassword: this.registrationForm.value.confirmPassword!,
        fullname: this.registrationForm.value.fullName!,
        phone: this.registrationForm.value.phoneNumber!,
        street: this.registrationForm.value.street!,
        city: this.registrationForm.value.city!,
        state: this.registrationForm.value.state!,
        zip: this.registrationForm.value.zip!,
        country: this.registrationForm.value.country!
      };

    this.registerService.registerUser(
      user
    );
    }
  }
}
