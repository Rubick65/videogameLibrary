import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameGeneralDataComponent } from './videogame-general-data-component';

describe('VideogameGeneralDataComponent', () => {
  let component: VideogameGeneralDataComponent;
  let fixture: ComponentFixture<VideogameGeneralDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideogameGeneralDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideogameGeneralDataComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
