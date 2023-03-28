import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MaterialModel } from 'src/app/core/models';
import { MaterialListInputComponent } from './material-list-input.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MaterialListInputComponent', () => {
  let component: MaterialListInputComponent;
  let fixture: ComponentFixture<MaterialListInputComponent>;
  let store: MockStore<{
    materials: Array<MaterialModel>
    currentSelected: MaterialModel | undefined
  }>;

  const initialState = { materials: [], currentSelected: undefined};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule, 
        HttpClientTestingModule, 
        MatInputModule,
        FormsModule,
        ReactiveFormsModule, 
      ],
      providers: [ provideMockStore({ initialState }),],
      declarations: [ MaterialListInputComponent ]
    })
    .compileComponents();

    store = TestBed.get<Store>(Store);

    fixture = TestBed.createComponent(MaterialListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
