import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsDetailsDialogComponent } from './materials-details-dialog.component';

describe('MaterialsDetailsDialogComponent', () => {
  let component: MaterialsDetailsDialogComponent;
  let fixture: ComponentFixture<MaterialsDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialsDetailsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialsDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
