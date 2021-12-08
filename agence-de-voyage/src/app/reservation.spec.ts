import { Reservation } from '../model/reservation';

describe('Reservation', () => {
  it('should create an instance', () => {
    expect(new Reservation()).toBeTruthy();
  });
});
