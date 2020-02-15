import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsEmailValidationComponent } from './errors-email-validation.component';

describe('ErrorsEmailValidationComponent', () => {
  let component: ErrorsEmailValidationComponent;
  let fixture: ComponentFixture<ErrorsEmailValidationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsEmailValidationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsEmailValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
