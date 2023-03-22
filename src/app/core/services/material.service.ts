import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { MaterialModel, MaterialResponseModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private _materialsUrl = 'assets/materials.json';
  private _materialList: MaterialModel[];
  
  constructor(private http: HttpClient) { }

  get materials(): Observable<MaterialModel[]> {
    
    return of(this._materialList)
  }

  public loadMaterials(): Promise<any> {
    
    return new Promise((resolve, reject) => {

      this.http.get<MaterialResponseModel>(this._materialsUrl)
      .subscribe( res => {
        localStorage.setItem('materials', JSON.stringify(res))
        this.assemble(res)
        resolve(true)
      })
    }).catch(console.error)
  }

  private assemble(data: MaterialResponseModel): void {
      this._materialList = data.d.PartSet.results;
  }
}
