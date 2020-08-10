import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreHouseDashboardComponent } from './store-house-dashboard.component';

describe('StoreHouseDashboardComponent', () => {
  let component: StoreHouseDashboardComponent;
  let fixture: ComponentFixture<StoreHouseDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoreHouseDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreHouseDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
