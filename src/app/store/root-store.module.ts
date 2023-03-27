import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { MaterialsStoreModule } from './materials/materials-store.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialsStoreModule,
    EffectsModule.forRoot(),
    StoreModule.forRoot(
        {}
    ),

  ]
})

export class RootStoreModule { 
    constructor(@Optional() @SkipSelf() parentModule?: RootStoreModule) {
        if(parentModule){
            throw new Error("RootStoreModule is already loaded")
        }
    }
}
