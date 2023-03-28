import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultPageComponent } from './default-page.component';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { PageMainComponent } from '../../components/page-main/page-main.component';
import { PageFooterComponent } from '../../components/page-footer/page-footer.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'

describe('DefaultPageComponent', () => {
  let component: DefaultPageComponent;
  let fixture: ComponentFixture<DefaultPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        PageHeaderComponent,
        DefaultPageComponent,
        PageMainComponent,
        PageFooterComponent
      ],
      imports: [
        RouterModule,
        MatToolbarModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefaultPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
