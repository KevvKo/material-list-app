import { Component, OnInit, OnDestroy } from '@angular/core';
import { MaterialModel } from 'src/app/core/models';
import { MaterialService } from 'src/app/core/services/material-service/material.service';
import { Subscription, forkJoin, combineLatest } from 'rxjs';

@Component({
  selector: 'app-materials-details-dialog',
  templateUrl: './materials-details-dialog.component.html',
})

export class MaterialsDetailsDialogComponent implements OnInit, OnDestroy {

  selectedMaterialsSubscription: Subscription;
  materialsSubscription: Subscription;

  selectedMaterial: MaterialModel | null
  materials: MaterialModel[]
  materialsLength: number;
  selectedMaterialIndex: number;

  constructor(private materialService: MaterialService) {}

  ngOnInit(): void {
      this.selectedMaterialsSubscription = this.materialService.currentSelectedMaterial.subscribe((item) => this.selectedMaterial = item);
      this.materialsSubscription = this.materialService.materials.subscribe((data) => this.materials = data);
      this.materialsLength = this.materials.length;
      this.selectedMaterialIndex = this.materials.findIndex((item) => this.selectedMaterial?.Id === item.Id)
  }

  ngOnDestroy(): void {
    this.materialService.removeSelectedMaterial()
    this.selectedMaterialsSubscription.unsubscribe();
    this.materialsSubscription.unsubscribe();
  }

  public handleClickRight(): void {
    this.selectedMaterialIndex === this.materialsLength -1 
      ?  this.selectedMaterialIndex = 0 
      :  this.selectedMaterialIndex += 1
    this.materialService.updateSelectedMaterial( this.materials[this.selectedMaterialIndex])
  }

  public handleClickLeft(): void {
    this.selectedMaterialIndex === 0 
      ?  this.selectedMaterialIndex = this.materialsLength  -1 
      :  this.selectedMaterialIndex -= 1
    this.materialService.updateSelectedMaterial( this.materials[this.selectedMaterialIndex])
  }
}
