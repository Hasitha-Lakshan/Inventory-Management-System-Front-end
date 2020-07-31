import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerReportsComponent } from './analyzer-reports.component';

describe('AnalyzerReportsComponent', () => {
  let component: AnalyzerReportsComponent;
  let fixture: ComponentFixture<AnalyzerReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzerReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzerReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
