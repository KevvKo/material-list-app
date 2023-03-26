import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialModel } from '../../models';
import { Store, select } from '@ngrx/store';
import { MaterialsActions } from '../../../store/materials/material.action';
import { getMaterials } from '../../../store/materials/materials.selectors';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  
  constructor( private store: Store<{ materials: Array<MaterialModel> }>) { }

  get materials(): Observable<MaterialModel[]> {
   
    return this.store.pipe(select(getMaterials))
  }

  public addNewMaterials(materials: MaterialModel[]): void {
    this.store.dispatch( MaterialsActions.addItems({ payload: materials }))
  }

  public bookAmount(materialId: number, amount: number): void{
    const payload = {
      materialId,
      amount
    }

    this.store.dispatch( MaterialsActions.bookAmount({ payload }))
  }

  public loadMaterials(): void {
    this.store.dispatch(MaterialsActions.loadMaterials())
  }
}
