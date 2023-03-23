import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOverviewModalComponent } from './detail-overview-modal.component';

describe('DetailOverviewModalComponent', () => {
  let component: DetailOverviewModalComponent;
  let fixture: ComponentFixture<DetailOverviewModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOverviewModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOverviewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
