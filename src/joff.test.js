import Joff from './joff';

describe('joff', () => {

  it('can fix control 4 <= 5.0', () => {
    const joff = new Joff();
    expect(joff.fixControl4(4)).toBeTruthy();
    expect(joff.fixControl4(5)).toBeTruthy();
  });

  it('can fix control 4 > 6.0', () => {
    const joff = new Joff();
    expect(joff.fixControl4(6)).toBeFalsy();
  });

});
