import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialModel } from '../../models';
import { Store, select } from '@ngrx/store';
import { MaterialsActions } from '../../../store/materials/material.action';
import { getMaterials, getSelectedMaterial } from '../../../store/materials/materials.selectors';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  
  constructor( private store: Store<{ materials: Array<MaterialModel> }>) { }

  get materials(): Observable<MaterialModel[]> {
   
    return this.store.pipe(select(getMaterials))
  }

  get currentSelectedMaterial(): Observable<MaterialModel | null > { 
    return this.store.pipe(select(getSelectedMaterial))
  }

  public addNewMaterials(materials: MaterialModel[]): void {
    this.store.dispatch( MaterialsActions.addItems({ payload: materials }))
  }

  public bookAmount(materialId: number, amount: number): void{
    const payload = {
      materialId,
      amount
    }

    this.store.dispatch( MaterialsActions.updateAmount({ payload }))
  }

  public loadMaterials(): void {
    this.store.dispatch(MaterialsActions.loadMaterials())
  }

  public updateSelectedMaterial(material: MaterialModel): void {

    const payload = {
      material
    }

    this.store.dispatch(MaterialsActions.updateSelectedMaterial({ payload }))
  }

  public removeSelectedMaterial(): void {
    this.store.dispatch(MaterialsActions.removeSelectedMaterial())
  }

}
