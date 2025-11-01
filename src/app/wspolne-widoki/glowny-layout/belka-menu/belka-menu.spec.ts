import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BelkaMenu } from './belka-menu';

describe('BelkaMenu', () => {
  let component: BelkaMenu;
  let fixture: ComponentFixture<BelkaMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BelkaMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BelkaMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
