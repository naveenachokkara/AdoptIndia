import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleHistoryComponent } from './vehiclehistory.component';

describe('VehicleHistoryComponent', () => {
  let component: VehicleHistoryComponent;
  let fixture: ComponentFixture<VehicleHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehicleHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
