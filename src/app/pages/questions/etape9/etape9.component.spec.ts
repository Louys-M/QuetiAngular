import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape9Component } from './etape9.component';

describe('Etape9Component', () => {
  let component: Etape9Component;
  let fixture: ComponentFixture<Etape9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
