import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape19Component } from './etape19.component';

describe('Etape19Component', () => {
  let component: Etape19Component;
  let fixture: ComponentFixture<Etape19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
