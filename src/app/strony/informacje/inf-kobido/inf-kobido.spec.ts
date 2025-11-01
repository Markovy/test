import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfKobido } from './inf-kobido';

describe('InfKobido', () => {
  let component: InfKobido;
  let fixture: ComponentFixture<InfKobido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfKobido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfKobido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
