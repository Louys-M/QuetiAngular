import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape20Component } from './etape20.component';

describe('Etape20Component', () => {
  let component: Etape20Component;
  let fixture: ComponentFixture<Etape20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape20Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
