import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape11Component } from './etape11.component';

describe('Etape11Component', () => {
  let component: Etape11Component;
  let fixture: ComponentFixture<Etape11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
