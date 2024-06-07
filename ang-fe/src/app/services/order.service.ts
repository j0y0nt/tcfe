import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  create(order: Order) : Observable<Order> {
    return this.http.post<Order>('http://localhost:8080/tcorder/', order);
  }
}
