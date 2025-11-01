import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GornaBelka } from './gorna-belka';

describe('GornaBelka', () => {
  let component: GornaBelka;
  let fixture: ComponentFixture<GornaBelka>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GornaBelka]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GornaBelka);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
