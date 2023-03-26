import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MaterialModel } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  public loadData(): Observable<MaterialModel[]> {
    const data = localStorage.getItem("materials")
  
    if(data) { 
      return of(JSON.parse(data) as MaterialModel[]);
    }

    return of([] as MaterialModel[]);
  }

  public updateStorage(data: MaterialModel[]): void {
    localStorage.setItem("materials", JSON.stringify(data))
  }
}
