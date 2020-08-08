import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryManagerSelectionsComponent } from './inventory-manager-selections.component';

describe('InventoryManagerSelectionsComponent', () => {
  let component: InventoryManagerSelectionsComponent;
  let fixture: ComponentFixture<InventoryManagerSelectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryManagerSelectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryManagerSelectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
