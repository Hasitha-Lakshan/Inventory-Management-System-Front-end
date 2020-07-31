import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLoadingComponent } from './new-loading.component';

describe('NewLoadingComponent', () => {
  let component: NewLoadingComponent;
  let fixture: ComponentFixture<NewLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
