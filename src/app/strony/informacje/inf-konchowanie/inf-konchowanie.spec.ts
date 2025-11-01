import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfKonchowanie } from './inf-konchowanie';

describe('InfKonchowanie', () => {
  let component: InfKonchowanie;
  let fixture: ComponentFixture<InfKonchowanie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfKonchowanie]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfKonchowanie);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
