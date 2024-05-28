import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { RegisterUserService } from '../register-user.service';
import { User } from '../user';
import { UserAddress } from '../user-address';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})

export class RegisterComponent {
  
  registerService: RegisterUserService = inject(RegisterUserService);

  applyForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    fullName: new FormControl(''),
    phoneNumber: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zip: new FormControl(),
    country: new FormControl(''),
  });

  registerUser() {

    let user: User = { 
        username: this.applyForm.value.username!,
        password: this.applyForm.value.password!,
        confirmPassword: this.applyForm.value.confirmPassword!,
        fullname: this.applyForm.value.fullName!,
        phone: this.applyForm.value.phoneNumber!,
        street: this.applyForm.value.street!,
        city: this.applyForm.value.city!,
        state: this.applyForm.value.state!,
        zip: this.applyForm.value.zip!,
        country: this.applyForm.value.country!
      };

    this.registerService.registerUser(
      user
    );
  }
}
