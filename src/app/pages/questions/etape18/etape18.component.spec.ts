import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape18Component } from './etape18.component';

describe('Etape18Component', () => {
  let component: Etape18Component;
  let fixture: ComponentFixture<Etape18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
