const sortTranslations = require('./sort-translations.js');

describe('#sortTranslation', function () {
  it('should sort keys alphabetically', function () {
    // Given
    const translations = {
      d: 'Daniel',
      a: 'Alpha',
      c: 'Charly',
      b: 'Beta',
    };
    const expectedResult = ['a', 'b', 'c', 'd'];

    // When
    const result = sortTranslations(translations);

    // Then
    expect(result).toEqual(expectedResult);
  });

  it('should put the `title` key on top', function () {
    // Given
    const translations = {
      d: 'Daniel',
      a: 'Alpha',
      title: 'should be first',
      c: 'Charly',
      b: 'Beta',
    };
    const expectedResult = ['title', 'a', 'b', 'c', 'd'];

    // When
    const result = sortTranslations(translations);

    // Then
    expect(result).toEqual(expectedResult);
  });

  it('should put the `current-lang` key on top', function () {
    // Given
    const translations = {
      d: 'Daniel',
      a: 'Alpha',
      'current-lang': 'should be first',
      c: 'Charly',
      b: 'Beta',
    };
    const expectedResult = ['current-lang', 'a', 'b', 'c', 'd'];

    // When
    const result = sortTranslations(translations);

    // Then
    expect(result).toEqual(expectedResult);
  });

  it('should put the `title` key before the `current-lang` key', function () {
    // Given
    const translations = {
      title: 'should be second',
      'current-lang': 'should be first',
    };
    const expectedResult = ['title', 'current-lang'];

    // When
    const result = sortTranslations(translations);

    // Then
    expect(result).toEqual(expectedResult);
  });
});
