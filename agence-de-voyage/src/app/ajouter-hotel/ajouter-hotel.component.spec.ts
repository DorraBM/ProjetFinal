import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterHotelComponent } from './ajouter-hotel.component';

describe('AjouterHotelComponent', () => {
  let component: AjouterHotelComponent;
  let fixture: ComponentFixture<AjouterHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
