import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsecteComponent } from './insecte.component';

describe('InsecteComponent', () => {
  let component: InsecteComponent;
  let fixture: ComponentFixture<InsecteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsecteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
