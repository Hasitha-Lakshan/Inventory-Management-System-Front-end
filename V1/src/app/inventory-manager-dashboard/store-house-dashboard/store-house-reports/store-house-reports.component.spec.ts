import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreHouseReportsComponent } from './store-house-reports.component';

describe('StoreHouseReportsComponent', () => {
  let component: StoreHouseReportsComponent;
  let fixture: ComponentFixture<StoreHouseReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreHouseReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreHouseReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
