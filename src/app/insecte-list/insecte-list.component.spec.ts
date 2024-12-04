import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsecteListComponent } from './insecte-list.component';

describe('InsecteListComponent', () => {
  let component: InsecteListComponent;
  let fixture: ComponentFixture<InsecteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsecteListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsecteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
