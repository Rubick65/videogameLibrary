import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerficationTokenComponent } from './verfication-token-component';

describe('VerficationTokenComponent', () => {
  let component: VerficationTokenComponent;
  let fixture: ComponentFixture<VerficationTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerficationTokenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VerficationTokenComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
