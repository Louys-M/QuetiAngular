import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etape16Component } from './etape16.component';

describe('Etape16Component', () => {
  let component: Etape16Component;
  let fixture: ComponentFixture<Etape16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Etape16Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Etape16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
