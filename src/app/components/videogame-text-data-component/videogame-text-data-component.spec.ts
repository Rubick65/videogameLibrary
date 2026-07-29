import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameTextDataComponent } from './videogame-text-data-component';

describe('VideogameTextDataComponent', () => {
  let component: VideogameTextDataComponent;
  let fixture: ComponentFixture<VideogameTextDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideogameTextDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideogameTextDataComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
