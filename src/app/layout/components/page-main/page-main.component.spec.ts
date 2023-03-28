import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMainComponent } from './page-main.component';
import { RouterModule } from '@angular/router';

describe('PageMainComponent', () => {
  let component: PageMainComponent;
  let fixture: ComponentFixture<PageMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMainComponent ],
      imports: [ RouterModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
