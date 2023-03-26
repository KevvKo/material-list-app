import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MaterialService } from '../../core/services/material-service/material.service';
import { MaterialModel } from 'src/app/core/models';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit, OnDestroy {

  materialsSubscription$: Subscription;
  dataSource: MatTableDataSource<MaterialModel>;
  displayedColumns: string[] = ['material', 'descTxt', 'customerPrice', 'customerCurrency', 'quantity', 'available', 'action'];

  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
    this.setupDataSource()
    this.setupFilterPredicate();
  }

  ngOnDestroy(): void {
      this.materialsSubscription$.unsubscribe()
  }

  public filterDescTxt(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public handleClickItem(): void {
    console.log("test")
  }
  
  private setupDataSource(): void {
    this.materialsSubscription$ = this.materialService.materials.subscribe( materials => {
      this.dataSource = new MatTableDataSource(materials)
    })
  }

  private setupFilterPredicate(): void {
    this.dataSource.filterPredicate = (data: MaterialModel, filter: string): boolean => {
      return (
        data.DescTxt.toLocaleLowerCase().includes(filter)
      )
    }
  }
}
