import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredItemsReportComponent } from './stored-items-report.component';

describe('StoredItemsReportComponent', () => {
  let component: StoredItemsReportComponent;
  let fixture: ComponentFixture<StoredItemsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoredItemsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredItemsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
