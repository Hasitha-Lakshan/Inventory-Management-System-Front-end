import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldItemsReportComponent } from './sold-items-report.component';

describe('SoldItemsReportComponent', () => {
  let component: SoldItemsReportComponent;
  let fixture: ComponentFixture<SoldItemsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoldItemsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoldItemsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
