import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailOverviewPageComponent } from './detail-overview-page.component';

describe('DetailOverviewPageComponent', () => {
  let component: DetailOverviewPageComponent;
  let fixture: ComponentFixture<DetailOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailOverviewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
