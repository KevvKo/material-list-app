import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MaterialModel } from 'src/app/core/models';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialListPageComponent } from './material-list-page.component';
import { MaterialListComponent } from '../../components/feature-materials/material-list/material-list.component';

describe('MaterialListPageComponent', () => {
  let component: MaterialListPageComponent;
  let fixture: ComponentFixture<MaterialListPageComponent>;
  let store: MockStore<{
    materials: Array<MaterialModel>
    currentSelected: MaterialModel | undefined
  }>;

  const initialState = { materials: [], currentSelected: undefined};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule, 
        HttpClientTestingModule, 
        MatInputModule,
        FormsModule,
        ReactiveFormsModule, 
      ],
      providers: [ provideMockStore({ initialState }),],
      declarations: [ MaterialListPageComponent, MaterialListComponent ]
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
