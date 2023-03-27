import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { materialsReducer } from './reducers/material.reducers';
import { EffectsModule } from '@ngrx/effects';
import { MaterialsEffects } from './effects/materials.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature( 'materials', materialsReducer ),
    EffectsModule.forFeature([MaterialsEffects])
  ]
})
export class MaterialsStoreModule { }
