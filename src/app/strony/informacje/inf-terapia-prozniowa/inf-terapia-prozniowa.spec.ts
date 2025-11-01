import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfTerapiaProzniowa } from './inf-terapia-prozniowa';

describe('InfTerapiaProzniowa', () => {
  let component: InfTerapiaProzniowa;
  let fixture: ComponentFixture<InfTerapiaProzniowa>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfTerapiaProzniowa]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfTerapiaProzniowa);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
