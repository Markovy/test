import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Glowna } from './glowna';

describe('Glowna', () => {
  let component: Glowna;
  let fixture: ComponentFixture<Glowna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Glowna]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Glowna);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
