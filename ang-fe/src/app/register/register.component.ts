import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { RegisterUserService } from '../register-user.service';
import { User } from '../user';
import { Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
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
      fullName: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zip: new FormControl('', [Validators.required]),
      //country: new FormControl('', [Validators.required]),
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

  get fullName() {
    return this.registrationForm.get('fullName');
  }
  
  get street() {
    return this.registrationForm.get('street');
  }

  get city() {
    return this.registrationForm.get('city');
  }

  get state() {
    return this.registrationForm.get('state');
  }

  get zip() {
    return this.registrationForm.get('zip');
  }

  get phoneNumber() {
    return this.registrationForm.get('phoneNumber');
  }

  registerUser() {
    //console.warn(this.registrationForm.value);
    //console.log('submitted.');
    //console.log(this.registrationForm.errors);
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
