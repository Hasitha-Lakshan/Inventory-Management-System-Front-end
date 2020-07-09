import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NLoadingComponent } from './nloading.component';

describe('NLoadingComponent', () => {
  let component: NLoadingComponent;
  let fixture: ComponentFixture<NLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
