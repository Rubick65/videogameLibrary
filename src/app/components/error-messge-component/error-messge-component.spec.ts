import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMessgeComponent } from './error-messge-component';

describe('ErrorMessgeComponent', () => {
  let component: ErrorMessgeComponent;
  let fixture: ComponentFixture<ErrorMessgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorMessgeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorMessgeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
