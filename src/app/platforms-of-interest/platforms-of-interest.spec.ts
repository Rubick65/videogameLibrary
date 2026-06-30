import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformsOfInterest } from './platforms-of-interest';

describe('PlatformsOfInterest', () => {
  let component: PlatformsOfInterest;
  let fixture: ComponentFixture<PlatformsOfInterest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformsOfInterest],
    }).compileComponents();

    fixture = TestBed.createComponent(PlatformsOfInterest);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
