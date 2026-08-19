import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckVerificationCodeComponent } from './check-verification-code-component';

describe('CheckVerificationCodeComponent', () => {
  let component: CheckVerificationCodeComponent;
  let fixture: ComponentFixture<CheckVerificationCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckVerificationCodeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CheckVerificationCodeComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
