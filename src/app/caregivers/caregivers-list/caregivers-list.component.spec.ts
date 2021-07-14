import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregiversListComponent } from './caregivers-list.component';

describe('CaregiversListComponent', () => {
  let component: CaregiversListComponent;
  let fixture: ComponentFixture<CaregiversListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregiversListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregiversListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
