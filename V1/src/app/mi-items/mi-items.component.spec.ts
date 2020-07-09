import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiItemsComponent } from './mi-items.component';

describe('MiItemsComponent', () => {
  let component: MiItemsComponent;
  let fixture: ComponentFixture<MiItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
