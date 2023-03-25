import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { MaterialService } from '../../core/services/material-service/material.service';
import { MaterialModel } from 'src/app/core/models';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  materials$: Observable<MaterialModel[]>
  displayedColumns: string[] = ['material', 'descTxt', 'customerPrice', 'customerCurrency', 'quantity', 'available', 'action'];
  value = 0;

  constructor(private materialService: MaterialService) { }
  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  numberFormControl = new FormControl('', [ 
    Validators.min(0),
    Validators.pattern("^\\d+$")
  ]);

  ngOnInit(): void {
    this.materials$ = this.materialService.materials
  }

  public handleClickBook(materialId:number, amount: string): void {
    if(materialId && amount) this.materialService.bookAmount(materialId, Number(amount));
  }


}
