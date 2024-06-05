import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Order } from '../order';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})

export class OrderComponent {
  
  model = new Order('', '', '','','', '', '', '', '');
    
  constructor() {
  }

  createOrder() {
    console.log(this.model);
  }
}
