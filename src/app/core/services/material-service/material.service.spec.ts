import { TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MaterialService } from './material.service';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { MaterialModel } from '../../models';

describe('MaterialService', () => {
  let service: MaterialService;
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
    service = TestBed.inject(MaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
