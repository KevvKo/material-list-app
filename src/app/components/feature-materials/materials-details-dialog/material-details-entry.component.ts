import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-material-details-entry',
  template: `
    <mat-list-item>
      <div class="flex">
          <span class="text-gray-400 mr-4">
          {{ subject }}: 
          </span>
          <span class="ml-auto">
          {{ value }}
          </span>
      </div>
    </mat-list-item>

  `,
})
export class MaterialDetailEntryComponent {
  @Input() subject: string;
  @Input() value: string | number;

}