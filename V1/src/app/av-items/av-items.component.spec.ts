import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvItemsComponent } from './av-items.component';

describe('AvItemsComponent', () => {
  let component: AvItemsComponent;
  let fixture: ComponentFixture<AvItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
