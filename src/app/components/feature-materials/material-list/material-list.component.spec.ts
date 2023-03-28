import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialListComponent } from './material-list.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MaterialModel } from 'src/app/core/models';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

describe('MaterialListComponent', () => {
  let component: MaterialListComponent;
  let fixture: ComponentFixture<MaterialListComponent>;
  let store: MockStore<{
    materials: Array<MaterialModel>
    currentSelected: MaterialModel | undefined
  }>;

  const initialState = { materials: [
    
  ], currentSelected: undefined};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientModule, 
        HttpClientTestingModule, 
        MatInputModule,
        FormsModule,
        ReactiveFormsModule, 
        MatDialogModule,
        MatTableModule
      ],
      providers: [ 
        provideMockStore({ initialState }),
        {provide: MatDialog,}
      ],
      declarations: [ MaterialListComponent ]
    })
    .compileComponents();

    store = TestBed.get<Store>(Store);
    fixture = TestBed.createComponent(MaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
