const {cal} = require('./bmi');

/*test('51/(0.5 * 0.5)', () => {
      
      expect(cal(51, 0.5)).toBe('Obese');
}); */

test.each([[70, 2.0, 'Underweight']]) (
      'i% / (i% * i%) equals i%', (a, b, expected) => {
            expect(cal(a, b)).toBe(expected);
      }
);

test.each([[20, 1.0, 'Normal weight']]) (
      'i% / (i% * i%) equals i%', (a, b, expected) => {
            expect(cal(a, b)).toBe(expected);
      }
);

test.each([[100, 2.0, 'Overweight']]) (
      'i% / (i% * i%) equals i%', (a, b, expected) => {
            expect(cal(a, b)).toBe(expected);
      }
);

test.each([[51, 0.5, 'Obese']]) (
      'i% / (i% * i%) equals i%', (a, b, expected) => {
            expect(cal(a, b)).toBe(expected);
      }
);