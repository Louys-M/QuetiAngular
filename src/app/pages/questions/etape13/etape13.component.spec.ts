import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape13Component } from './etape13.component';

describe('Etape13Component', () => {
  let component: Etape13Component;
  let fixture: ComponentFixture<Etape13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
