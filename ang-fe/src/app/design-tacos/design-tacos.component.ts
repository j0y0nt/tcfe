import { Component, inject } from '@angular/core';
import { TacoDesignService } from '../taco-design.service';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormArray, FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-design-tacos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './design-tacos.component.html',
  styleUrl: './design-tacos.component.css'
})

export class DesignTacosComponent {

  designService: TacoDesignService = inject(TacoDesignService);
  applyForm: FormGroup;
  selected: string[];

  constructor(private formBuilder: FormBuilder) {
    this.applyForm = this.formBuilder.group({
      name: new FormControl(''),
      ingredients: new FormArray([new FormControl('')]),
    });
    this.selected = [];
  }

  get ingredients() {
    return this.applyForm.get('ingredients') as FormArray;
  }

  addIngredient($event: any) {
   
    if($event.target.checked) {
      this.selected.push($event.target.id);
    } else {
      this.selected = this.selected.filter(item => item !== $event.target.id)
    }
    
  }

  submitTacoDesign() {
    
    this.designService.submitTacoDesign(
      this.applyForm.value.name ?? '',
      this.selected ?? [],
    );
  }
}
