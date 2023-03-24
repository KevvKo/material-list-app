import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialModel } from '../models';
import { Store } from '@ngrx/store';
import { addItems } from '../store/actions/material.action';
@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  
  constructor( private store: Store<{ materials: Array<MaterialModel> }>) { }

  public get materials(): Observable<MaterialModel[]> {
    return this.store.select("materials")
  }

  public addNewMaterials(materials: MaterialModel[]): void {
    this.store.dispatch(addItems({ payload: materials}))
  }
}
