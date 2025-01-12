import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape10Component } from './etape10.component';

describe('Etape10Component', () => {
  let component: Etape10Component;
  let fixture: ComponentFixture<Etape10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
