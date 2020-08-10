import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreHouseNewStocksComponent } from './store-house-new-stocks.component';

describe('StoreHouseNewStocksComponent', () => {
  let component: StoreHouseNewStocksComponent;
  let fixture: ComponentFixture<StoreHouseNewStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreHouseNewStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreHouseNewStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
