import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { materialsReducer } from '../reducers/material.reducers';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ materials: materialsReducer }),
  ]
})
export class MaterialsModule { }
