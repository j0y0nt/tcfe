import { Component, inject } from '@angular/core';
import { TacoDesignService } from '../taco-design.service';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-design-tacos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './design-tacos.component.html',
  styleUrl: './design-tacos.component.css'
})

export class DesignTacosComponent {

  designService: TacoDesignService = inject(TacoDesignService);

  applyForm = new FormGroup({
    name: new FormControl(''),
    ingredients: new FormControl(''),
  });

}
