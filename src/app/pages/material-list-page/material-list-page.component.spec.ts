import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialListPageComponent } from './material-list-page.component';

describe('MaterialListPageComponent', () => {
  let component: MaterialListPageComponent;
  let fixture: ComponentFixture<MaterialListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
