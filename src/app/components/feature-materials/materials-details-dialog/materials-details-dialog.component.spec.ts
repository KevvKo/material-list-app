import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Store, MemoizedSelector } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MaterialModel } from 'src/app/core/models';
import { MaterialsDetailsDialogComponent } from './materials-details-dialog.component';
import { getMaterials } from '../../../store/materials/selectors/materials.selectors'
describe('MaterialsDetailsDialogComponent', () => {
  let component: MaterialsDetailsDialogComponent;
  let fixture: ComponentFixture<MaterialsDetailsDialogComponent>;
  type StoreState = {
    materials: Array<MaterialModel>,
    currentSelected: MaterialModel | undefined
  }
  let store: MockStore<StoreState>;
  let mockGetMaterialsSelector: MemoizedSelector<StoreState, MaterialModel[]>;

  const initialState = { materials: [
    {
      "Material": "6396734",
      "Quantity": "2",
      "DescTxt": "E06396734       \\D400",
      "CustomerPrice": "40000.000",
      "CustomerCurrency": "EUR",
      "RepairPrice": "9592.000",
      "RepairCurrency": "EUR",
      "Available": "16093",
      "ExtUnit": "ST",
      "MatStatus": "",
      "StorageLoc": "1000",
      "StorageLocDesc": "10032476",
      "NDFQuote": "002",
      "NDFCounter": "000001",
      "TSPercentage": "016",
      "TSPercentageCounter": "000001"
    }
  ], currentSelected: undefined};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ provideMockStore({ initialState }),],
      declarations: [ MaterialsDetailsDialogComponent ]
    })
    .compileComponents();

    store = TestBed.get<Store>(Store);
    mockGetMaterialsSelector = store.overrideSelector(getMaterials, 
      [
        {
          Id: 1,
          "Material": "6396734",
          "Quantity": 2,
          "DescTxt": "E06396734       \\D400",
          "CustomerPrice": "40000.000",
          "CustomerCurrency": "EUR",
          "RepairPrice": "9592.000",
          "RepairCurrency": "EUR",
          "Available": 16093,
          "ExtUnit": "ST",
          "MatStatus": "",
          "StorageLoc": "1000",
          "StorageLocDesc": "10032476",
          "NDFQuote": "002",
          "NDFCounter": "000001",
          "TSPercentage": "016",
          "TSPercentageCounter": "000001"
        }
      ]
    );
    fixture = TestBed.createComponent(MaterialsDetailsDialogComponent,
      );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
