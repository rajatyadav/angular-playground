import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiversDetailsComponent } from './caregivers-details.component';

describe('CaregiversDetailsComponent', () => {
  let component: CaregiversDetailsComponent;
  let fixture: ComponentFixture<CaregiversDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregiversDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiversDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
