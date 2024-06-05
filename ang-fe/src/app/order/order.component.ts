import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Order } from '../order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})

export class OrderComponent {
  
  model = new Order('', '', '','','', '', '', '');
   tacoId: number;

   orderService: OrderService = inject(OrderService);

  constructor(private route: ActivatedRoute) {
      this.tacoId = Number( this.route.snapshot.paramMap.get('tacoId'));
  }

  ngOnInit() {
    
  }
  
  createOrder() {
    console.log(this.model);
    this.model.tacoId = this.tacoId;
    this.orderService.create(this.model).
    subscribe({
      next: (order) =>{ console.log(order);},
      error: (errResponse) => {
        console.log(errResponse);
      }
    });
  }
}
