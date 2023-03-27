import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialListInputComponent } from './material-list-input.component';

describe('MaterialListInputComponent', () => {
  let component: MaterialListInputComponent;
  let fixture: ComponentFixture<MaterialListInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialListInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
