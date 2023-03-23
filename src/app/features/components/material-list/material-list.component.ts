import { Component } from '@angular/core';
import { MaterialService } from 'src/app/core/services/material.service';
import { MaterialModel } from 'src/app/core/models';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.css']
})
export class MaterialListComponent implements OnInit {

  materials$: Observable<MaterialModel[]>
  displayedColumns: string[] = ['material', 'descTxt', 'customerPrice', 'customerCurrency', 'quantity', 'available', 'action'];
  value = 0;

  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
    this.materials$ = this.materialService.materials
  }

}
