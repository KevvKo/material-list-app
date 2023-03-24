import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  MaterialResponseModel  } from '../models';
import { MaterialService } from './material.service';
@Injectable({
  providedIn: 'root'
})

export class SetupService {

  constructor(private http: HttpClient,  private materials: MaterialService) { }

  public loadJSON(): Promise<any> {
    
    return new Promise((resolve, reject) => {

      this.http.get<MaterialResponseModel>('assets/materials.json')
      .subscribe( res => {
        this.assemble(res)
        resolve(true)
      })
    }).catch(console.error)
  }

  private assemble(response: MaterialResponseModel): void {
        const data = response.d.PartSet.results
        localStorage.setItem('materials', JSON.stringify(data))
        this.materials.addNewMaterials(data)
  }
}
