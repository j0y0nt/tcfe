import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { TacoDesignService } from '../taco-design.service';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormArray, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-design-tacos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './design-tacos.component.html',
  styleUrl: './design-tacos.component.css'
})

export class DesignTacosComponent {
  
  iconMap: any = {
    'FLTO': 'wheat-tortilla.jpg',
    'COTO': 'corn-tortilla.jpg',
    'GRBF': 'ground-beef.jpg',
    'CARN': 'carnitaas.jpg',
    'TMTO': 'diced-tomatoes.jpg',
    'LETC': 'lettuce.jpg',
    'CHED': 'cheddar-cheese.jpg',
    'JACK': 'monterry-jack-cheese.jpg',
    'SLSA': 'salsa-sauce.jpg',
    'SRCR': 'sour-cream.jpg'
  };


  designService: TacoDesignService = inject(TacoDesignService);
  applyForm: FormGroup;
  selected: Ingredient[];

  constructor(private formBuilder: FormBuilder, private router: Router ) {
    this.applyForm = this.formBuilder.group({
      name: new FormControl(''),
      ingredients: new FormArray([new FormControl('')]),
    });
    this.selected = new Array<Ingredient>();
  }

  get ingredients() {
    return this.applyForm.get('ingredients') as FormArray;
  }

  addIngredient($event: any) {
   
    if($event.target.checked) {
      this.selected.push(this.designService.ingredientList.filter(item => item.id == $event.target.id )[0]);
    } else {
      this.selected = this.selected.filter(item => item !== $event.target.id)
    }
    
  }

  submitTacoDesign() {
    
    this.designService.submitTacoDesign(
      this.applyForm.value.name ?? '',
      this.selected ?? [],
    ).subscribe({
      next: (taco) => {
        console.log(taco); 
        //localStorage.setItem('currentUser', JSON.stringify(x));
        this.router.navigate(['/order', { tacoId: taco.id}]);
      },
      error: (errResponse) => { 
        console.log(errResponse.error.message); 
      }
    });
  }
}
