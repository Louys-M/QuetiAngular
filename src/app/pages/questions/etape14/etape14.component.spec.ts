import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape14Component } from './etape14.component';

describe('Etape14Component', () => {
  let component: Etape14Component;
  let fixture: ComponentFixture<Etape14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape14Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
