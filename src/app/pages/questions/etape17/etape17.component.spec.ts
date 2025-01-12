import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape17Component } from './etape17.component';

describe('Etape17Component', () => {
  let component: Etape17Component;
  let fixture: ComponentFixture<Etape17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape17Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
