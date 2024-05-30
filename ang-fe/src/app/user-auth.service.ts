import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http: HttpClient) { 

  }

  login(username: string, password: string): string {

    this.http.post<any>('http://localhost:8080/login/', {username: username, password: password}).subscribe(authToken => {
      console.log('handle jwt token ');
    });
    return '';
  };
}
