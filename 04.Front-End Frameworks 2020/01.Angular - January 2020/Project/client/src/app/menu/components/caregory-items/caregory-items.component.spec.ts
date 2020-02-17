import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaregoryItemsComponent } from './caregory-items.component';

describe('CaregoryItemsComponent', () => {
  let component: CaregoryItemsComponent;
  let fixture: ComponentFixture<CaregoryItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaregoryItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaregoryItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
