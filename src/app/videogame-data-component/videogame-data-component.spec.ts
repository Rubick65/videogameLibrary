import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameDataComponent } from './videogame-data-component';

describe('VideogameDataComponent', () => {
  let component: VideogameDataComponent;
  let fixture: ComponentFixture<VideogameDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideogameDataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideogameDataComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
