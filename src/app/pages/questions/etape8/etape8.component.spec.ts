import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape8Component } from './etape8.component';

describe('Etape8Component', () => {
  let component: Etape8Component;
  let fixture: ComponentFixture<Etape8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape8Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
