import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierHotelComponent } from './modifier-hotel.component';

describe('ModifierHotelComponent', () => {
  let component: ModifierHotelComponent;
  let fixture: ComponentFixture<ModifierHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
