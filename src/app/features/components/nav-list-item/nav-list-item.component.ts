import { Component, Input } from '@angular/core';
import { MaterialModel } from 'src/app/core/models';

@Component({
  selector: 'app-nav-list-item',
  templateUrl: './nav-list-item.component.html',
  styleUrls: ['./nav-list-item.component.css']
})
export class NavListItemComponent {
  @Input() material: MaterialModel
}
