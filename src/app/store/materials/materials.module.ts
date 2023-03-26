import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { materialsReducer } from './material.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MaterialsEffects } from './materials.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ materials: materialsReducer }),
    EffectsModule.forRoot([MaterialsEffects])
  ]
})
export class MaterialsModule { }
