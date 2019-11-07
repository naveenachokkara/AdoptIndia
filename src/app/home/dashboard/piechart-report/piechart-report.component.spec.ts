import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PiechartReportComponent } from './piechart-report.component';

describe('PiechartReportComponent', () => {
  let component: PiechartReportComponent;
  let fixture: ComponentFixture<PiechartReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PiechartReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PiechartReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
