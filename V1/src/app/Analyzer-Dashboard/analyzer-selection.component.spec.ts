import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzerSelectionComponent } from './analyzer-selection.component';

describe('AnalyzerSelectionComponent', () => {
  let component: AnalyzerSelectionComponent;
  let fixture: ComponentFixture<AnalyzerSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzerSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzerSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
