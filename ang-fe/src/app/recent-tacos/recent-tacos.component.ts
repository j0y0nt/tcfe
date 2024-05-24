import { Component } from '@angular/core';
import { Taco } from '../taco';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-recent-tacos',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './recent-tacos.component.html',
  styleUrl: './recent-tacos.component.css',
})

export class RecentTacosComponent {

  tacoList: Array<Taco> = [
    {
      "id": 1,
      "createdAt": "2024-05-23T09:19:49.408+00:00",
      "name": "Order A21",
      "ingredients": [
        {
          "id": "FLTO",
          "name": "Flour Tortilla",
          "type": "WRAP"
        },
        {
          "id": "GRBF",
          "name": "Ground Beef",
          "type": "PROTEIN"
        },
        {
          "id": "CARN",
          "name": "Carnitas",
          "type": "PROTEIN"
        },
        {
          "id": "CHED",
          "name": "Cheddar",
          "type": "CHEESE"
        },
        {
          "id": "JACK",
          "name": "Monterrey Jack",
          "type": "CHEESE"
        },
        {
          "id": "TMTO",
          "name": "Diced Tomatoes",
          "type": "VEGGIES"
        },
        {
          "id": "SLSA",
          "name": "Salsa",
          "type": "SAUCE"
        }
      ]
    },
    {
      "id": 1,
      "createdAt": "2024-05-23T09:19:49.408+00:00",
      "name": "Order A21",
      "ingredients": [
        {
          "id": "FLTO",
          "name": "Flour Tortilla",
          "type": "WRAP"
        },
        {
          "id": "GRBF",
          "name": "Ground Beef",
          "type": "PROTEIN"
        },
        {
          "id": "CARN",
          "name": "Carnitas",
          "type": "PROTEIN"
        },
        {
          "id": "CHED",
          "name": "Cheddar",
          "type": "CHEESE"
        },
        {
          "id": "JACK",
          "name": "Monterrey Jack",
          "type": "CHEESE"
        },
        {
          "id": "TMTO",
          "name": "Diced Tomatoes",
          "type": "VEGGIES"
        },
        {
          "id": "SLSA",
          "name": "Salsa",
          "type": "SAUCE"
        }
      ]
    }
  ];
}
