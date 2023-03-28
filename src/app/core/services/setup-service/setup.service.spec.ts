import { HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MaterialModel } from '../../models';
import { SetupService } from './setup.service';

describe('SetupService', () => {
  let service: SetupService;
  let store: MockStore<{
    materials: Array<MaterialModel>
    currentSelected: MaterialModel | undefined
  }>;

  const initialState = { materials: [], currentSelected: undefined};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ provideMockStore({ initialState }),]
    });

    store = TestBed.get<Store>(Store);
    service = TestBed.inject(SetupService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
