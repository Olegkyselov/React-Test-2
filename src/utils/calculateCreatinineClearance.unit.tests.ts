import { calculateCreatinineClearance } from './calculateCreatinineClearance';

describe('calculateCreatinineClearance', () => {
  it('tells that severity is low if total score is <= 3', () => {
    const { severity } = calculateCreatinineClearance({
      sex: 'Male',
      age: 35,
      weight: 90,
      height: 178,
      creatinine: 0.3,
    });

    expect(severity).toBe('low');
  });

  it('tells that severity is hight if total score is > 3', () => {
    const { severity } = calculateCreatinineClearance({
      sex: 'Male',
      age: 35,
      weight: 90,
      height: 178,
      creatinine: 0.9,
    });

    expect(severity).toBe('hight');
  });
});
