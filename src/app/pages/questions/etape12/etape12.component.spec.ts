import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape12Component } from './etape12.component';

describe('Etape12Component', () => {
  let component: Etape12Component;
  let fixture: ComponentFixture<Etape12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
