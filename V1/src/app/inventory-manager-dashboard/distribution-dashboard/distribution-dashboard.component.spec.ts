import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributionDashboardComponent } from './distribution-dashboard.component';

describe('NavbarComponent', () => {
  let component: DistributionDashboardComponent;
  let fixture: ComponentFixture<DistributionDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributionDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributionDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
