import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape15Component } from './etape15.component';

describe('Etape15Component', () => {
  let component: Etape15Component;
  let fixture: ComponentFixture<Etape15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
