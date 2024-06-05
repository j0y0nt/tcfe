import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { HttpClient } from '@angular/common/http';
import { Taco } from './taco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacoDesignService {
  url = 'http://localhost:3000/locations';
 
  constructor (private http: HttpClient) { 
    
  }

  prefixMap: any = {
    'WRAP': 'Designate your',
    'PROTEIN': 'Pick your',
    'VEGGIES': 'Pick your',
    'CHEESE': 'Pick your',
    'SAUCE': 'Pick your',
  };

  ingredientByGroup : any = [
    {
      type: 'WRAP',
      ingredients: [{
        id: 'FLTO', 
        name: 'Flour Tortilla', 
        type: 'WRAP'
      },
      {
        id: 'COTO', 
        name: 'Corn Tortilla', 
        type: 'WRAP'
      }]
    },
    {
      type: 'PROTEIN',
      ingredients: [ {
        id: 'GRBF', 
        name: 'Ground Beef', 
        type: 'PROTEIN'
      },
      {
        id: 'CARN', 
        name: 'Carnitas', 
        type: 'PROTEIN'
      }]
    },
    {
      type: 'VEGGIES',
      ingredients: [{
        id: 'TMTO', 
        name: 'Diced Tomatoes', 
        type: 'VEGGIES'
      },
      {
        id: 'LETC', 
        name: 'Lettuce', 
        type: 'VEGGIES'
      }]
    },
    // Cheese
    {
      type: 'CHEESE',
      ingredients: [{
        id: 'CHED', 
        name: 'Cheddar', 
        type: 'CHEESE'
      },
      {
        id: 'JACK', 
        name: 'Monterrey Jack', 
        type: 'CHEESE'
      }]
    },
    // Sauce
    {
      type: 'SAUCE',
      ingredients: [ {
        id: 'SLSA', 
        name: 'Salsa', 
        type: 'SAUCE'
      },
      {
        id: 'SRCR', 
        name: 'Sour Cream', 
        type: 'SAUCE'
      }]
    }
  ];

  
  ingredientList: Ingredient[] = [{
    id: 'FLTO', 
    name: 'Flour Tortilla', 
    type: 'WRAP'
  },
  {
    id: 'COTO', 
    name: 'Corn Tortilla', 
    type: 'WRAP'
  },
  {
    id: 'GRBF', 
    name: 'Ground Beef', 
    type: 'PROTEIN'
  },
  {
    id: 'CARN', 
    name: 'Carnitas', 
    type: 'PROTEIN'
  },
  {
    id: 'TMTO', 
    name: 'Diced Tomatoes', 
    type: 'VEGGIES'
  },
  {
    id: 'LETC', 
    name: 'Lettuce', 
    type: 'VEGGIES'
  },
  {
    id: 'CHED', 
    name: 'Cheddar', 
    type: 'CHEESE'
  },
  {
    id: 'JACK', 
    name: 'Monterrey Jack', 
    type: 'CHEESE'
  },
  {
    id: 'SLSA', 
    name: 'Salsa', 
    type: 'SAUCE'
  },
  {
    id: 'SRCR', 
    name: 'Sour Cream', 
    type: 'SAUCE'
  }];

  getAllIngredientList(): Ingredient[] {
    return this.ingredientList;
  }

  submitTacoDesign(name: String, ingredients: Ingredient[]): Observable<Taco> {
    return this.http.post<Taco>('http://localhost:8080/tcdesign/', {name: name, ingredients: ingredients});
  }

}
