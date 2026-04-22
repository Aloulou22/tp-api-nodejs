const { calculMention } = require('../utils/calculNote');

describe('calculMention()', () => {
  test('18 → Très Bien', () => {
    expect(calculMention(18)).toBe('Très Bien');
  });

  test('10 → Passable', () => {
    expect(calculMention(10)).toBe('Passable');
  });
});