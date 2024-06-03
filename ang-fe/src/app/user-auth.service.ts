import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs';
import { Observable

 } from 'rxjs';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http: HttpClient) { 

  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<any>( 'http://localhost:8080/auth/login', {username: username, password: password}); 
  };
}
