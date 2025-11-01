import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlownyLayout } from './glowny-layout';

describe('GlownyLayout', () => {
  let component: GlownyLayout;
  let fixture: ComponentFixture<GlownyLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GlownyLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlownyLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
