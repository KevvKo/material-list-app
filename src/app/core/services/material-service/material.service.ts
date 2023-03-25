import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialModel } from '../../models';
import { Store, select } from '@ngrx/store';
import { MaterialsActions } from '../../../store/materials/actions/material.action';
import { getMaterials } from '../../../store/materials/selectors/materials.selectors';

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

  public bookAmount(material: MaterialModel, amount: number): void{

    const payload = {
      material,
      amount
    }

    this.store.dispatch( MaterialsActions.bookAmount({ payload }))
  }
}
