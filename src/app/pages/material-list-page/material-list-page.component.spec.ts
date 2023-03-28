import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MaterialModel } from 'src/app/core/models';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialListPageComponent } from './material-list-page.component';
import { MaterialListComponent } from '../../components/feature-materials/material-list/material-list.component';
import { MatDialogModule } from '@angular/material/dialog'; 
import { MatTableModule } from '@angular/material/table';

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
        BrowserAnimationsModule,
        HttpClientModule, 
        HttpClientTestingModule, 
        MatInputModule,
        MatTableModule,
        FormsModule,
        ReactiveFormsModule, 
        MatDialogModule
      ],
      providers: [ provideMockStore({ initialState }), ],
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
