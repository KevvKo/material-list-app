import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-materials-details-dialog',
  templateUrl: './materials-details-dialog.component.html',
  styleUrls: ['./materials-details-dialog.component.css']
})

export class MaterialsDetailsDialogComponent {
  constructor() {@Inject(MAT_DIALOG_DATA) public data: Materia}
}
