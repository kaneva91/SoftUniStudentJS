import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateroriesComponent } from './caterories.component';

describe('CateroriesComponent', () => {
  let component: CateroriesComponent;
  let fixture: ComponentFixture<CateroriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateroriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateroriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
