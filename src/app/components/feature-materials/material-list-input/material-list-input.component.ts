import { Component, Input } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MaterialService } from '../../../core/services/material-service/material.service';
import { MaterialModel } from 'src/app/core/models';

@Component({
  selector: 'app-material-list-input',
  templateUrl: './material-list-input.component.html',
})

export class MaterialListInputComponent {

  @Input() material: MaterialModel;
  
  numberFormControl = new FormControl('', [ 
    Validators.min(0),
    Validators.pattern("^\\d+$"),
  ]);

  constructor(private materialService: MaterialService) { }

  public handleClickBook(material: MaterialModel, amount: string): void {

    if (material.Available -  Number(amount) < 0) {
      this.numberFormControl.setErrors({noAvailability: true})
      return
    } 

    if(material && amount) this.materialService.bookAmount(material.Id, Number(amount));
    if(this.numberFormControl.hasError("noAvailability")) {
      this.numberFormControl.setErrors({noAvailability: false})
    }
  }

}
