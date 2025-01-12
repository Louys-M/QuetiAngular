import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape6Component } from './etape6.component';

describe('Etape6Component', () => {
  let component: Etape6Component;
  let fixture: ComponentFixture<Etape6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
