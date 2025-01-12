import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape21Component } from './etape21.component';

describe('Etape21Component', () => {
  let component: Etape21Component;
  let fixture: ComponentFixture<Etape21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape21Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
