import { Component } from '@angular/core';
import { MaterialService } from 'src/app/core/services/material-service/material.service';
import { MaterialModel } from 'src/app/core/models';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-material-list-page',
  templateUrl: './material-list-page.component.html',
  styleUrls: ['./material-list-page.component.css']
})
export class MaterialListPageComponent implements OnInit {

  materials$: Observable<MaterialModel[]>

  constructor(private materialService: MaterialService) {

  }

  ngOnInit(): void {
    this.materials$ = this.materialService.materials
  }

}
