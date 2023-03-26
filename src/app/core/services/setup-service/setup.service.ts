import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  MaterialModel, MaterialResponseModel  } from '../../models';
import { MaterialService } from '../material-service/material.service';
import { StorageService } from '../storage-service/storage.service';

@Injectable({
  providedIn: 'root'
})
export class SetupService {

  constructor(
    private http: HttpClient,  
    private materials: MaterialService,
    private storage: StorageService,
  ) { }

  public loadJSON(): void {

      this.http.get<MaterialResponseModel>('assets/materials.json')
      .subscribe( res => {
        this.assemble(res)
      })

  }

  private assemble(response: MaterialResponseModel): void {
        const data = response.d.PartSet.results
        const materials = this.mapResponseToId(data);
        this.storage.updateStorage(materials);
        this.materials.loadMaterials()
  }

  private mapResponseToId(data: MaterialResponseModel[]): MaterialModel[] {
    return data.map( (material, index) => {
      return {
        Id: index + 1,
        ...material
      }
    })
  }
}
