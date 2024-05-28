import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(private http: HttpClient) { }

  registerUser(newUser: User) {
    console.log('RegisterUserService ');
    console.log(newUser);
    this.http.post<User>('http://localhost:8080/tcregister/', newUser).subscribe(user => {
      console.log('Updated config:', user);
    });
  }
}
