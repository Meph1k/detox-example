import { countries } from '../src/utils/countries';

describe('Reset states', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should reset capitals after going back', async () => {
    await expect(element(by.id('hard-button'))).toBeVisible();
    await element(by.id('hard-button')).tap();
    await element(by.id('capitals-button')).tap();

    for (let i = 0; i < 2; i++) {
      await element(by.id('capital-text-input')).replaceText(countries['hard'][i].capital);
      await element(by.id('next-capital-button')).tap();
    }

    await element(by.text('Go back')).tap();

    await element(by.id('capitals-button')).tap();
    await expect(element(by.id('current-country-name'))).toHaveText(countries.hard[0].name)
  });

  it('should reset countries after going back', async () => {
    await expect(element(by.id('hard-button'))).toBeVisible();
    await element(by.id('hard-button')).tap();
    await element(by.id('countries-button')).tap();

    for (let i = 0; i < 2; i++) {
      await element(by.id('correct-answer-tile')).tap()
    }

    await element(by.text('Go back')).tap();

    await element(by.id('countries-button')).tap();
    await expect(element(by.id('question-number-0'))).toBeVisible();
  });
});
