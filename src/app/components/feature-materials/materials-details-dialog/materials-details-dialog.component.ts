import { Component, OnInit, OnDestroy } from '@angular/core';
import { MaterialModel } from 'src/app/core/models';
import { MaterialService } from 'src/app/core/services/material-service/material.service';

@Component({
  selector: 'app-materials-details-dialog',
  templateUrl: './materials-details-dialog.component.html',
})

export class MaterialsDetailsDialogComponent implements OnInit, OnDestroy {

  selectedMaterial: MaterialModel | null
  materials: MaterialModel[]

  constructor(private materialService: MaterialService) {}

  ngOnInit(): void {
      this.materialService.currentSelectedMaterial.subscribe((item) => this.selectedMaterial = item)
      this.materialService.materials.subscribe((data) => this.materials = data)
  }

  ngOnDestroy(): void {
    this.materialService.removeSelectedMaterial()
  }

  public handleClickRight(): void {
    const length = this.materials.length
    let index = this.materials.findIndex((item) => this.selectedMaterial?.Id === item.Id)

    index === length -1 ? index = 0 : index += 1

    this.materialService.updateSelectedMaterial( this.materials[index])
  }

  public handleClickLeft(): void {
    const length = this.materials.length
    let index = this.materials.findIndex((item) => this.selectedMaterial?.Id === item.Id)

    index === 0 ? index = length -1 : index -= 1

    this.materialService.updateSelectedMaterial( this.materials[index])
  }
}
