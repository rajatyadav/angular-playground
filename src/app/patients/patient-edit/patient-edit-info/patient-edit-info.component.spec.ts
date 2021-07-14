import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditInfoComponent } from './patient-edit-info.component';

describe('PatientEditInfoComponent', () => {
  let component: PatientEditInfoComponent;
  let fixture: ComponentFixture<PatientEditInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientEditInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEditInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
