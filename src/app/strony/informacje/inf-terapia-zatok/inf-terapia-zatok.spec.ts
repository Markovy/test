import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfTerapiaZatok } from './inf-terapia-zatok';

describe('InfTerapiaZatok', () => {
  let component: InfTerapiaZatok;
  let fixture: ComponentFixture<InfTerapiaZatok>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfTerapiaZatok]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfTerapiaZatok);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
