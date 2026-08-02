import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideogameCommentsComponent } from './videogame-comments-component';

describe('VideogameCommentsComponent', () => {
  let component: VideogameCommentsComponent;
  let fixture: ComponentFixture<VideogameCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideogameCommentsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VideogameCommentsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
