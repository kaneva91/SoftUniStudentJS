import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NontFoundComponent } from './nont-found.component';

describe('NontFoundComponent', () => {
  let component: NontFoundComponent;
  let fixture: ComponentFixture<NontFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NontFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NontFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
