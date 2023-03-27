import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialModel } from '../../models';
import { Store, select } from '@ngrx/store';
import { getMaterials, getSelectedMaterial } from '../../../store/materials/selectors/materials.selectors';
import { MaterialsAddItemsAction } from 'src/app/store/materials/actions/materials-add-items.actions';
import { MaterialsUpdateAmountAction } from 'src/app/store/materials/actions/materials-update-amount.actions';
import { MaterialsLoadAction } from 'src/app/store/materials/actions/materials-load.action';
import { MaterialsSelectedAction } from 'src/app/store/materials/actions/materials-selected.actions';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  
  constructor( private store: Store<{ materials: Array<MaterialModel> }>) { }

  get materials(): Observable<MaterialModel[]> {
   
    return this.store.pipe(select(getMaterials))
  }

  get currentSelectedMaterial(): Observable<MaterialModel | undefined > { 
    return this.store.pipe(select(getSelectedMaterial))
  }

  public addNewMaterials(materials: MaterialModel[]): void {
    this.store.dispatch( MaterialsAddItemsAction .addItems({ payload: materials }))
  }

  public bookAmount(materialId: number, amount: number): void{
    const payload = {
      materialId,
      amount
    }

    this.store.dispatch( MaterialsUpdateAmountAction.updateAmount({ payload }))
  }

  public loadMaterials(): void {
    this.store.dispatch(MaterialsLoadAction.loadMaterials())
  }

  public updateSelectedMaterial(material: MaterialModel): void {

    const payload = {
      material
    }

    this.store.dispatch(MaterialsSelectedAction.update({ payload }))
  }

  public removeSelectedMaterial(): void {
    this.store.dispatch(MaterialsSelectedAction.remove())
  }

}
