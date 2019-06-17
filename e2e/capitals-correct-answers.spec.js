import { countries } from '../src/utils/countries';

const goToResults = async (difficultyLevel) => {
  await expect(element(by.id(`${difficultyLevel}-button`))).toBeVisible();
  await element(by.id(`${difficultyLevel}-button`)).tap();
  await element(by.id('capitals-button')).tap();

  for (let i = 0; i < countries[difficultyLevel].length; i++) {
    await element(by.id('capital-text-input')).replaceText(countries[difficultyLevel][i].capital);
    await element(by.id('next-capital-button')).tap();
  }

  await waitFor(element(by.id('results-view'))).toBeVisible().withTimeout(2000);
}

describe('Correct answers', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should end on results view (hard)', async () => {
    await goToResults('hard')
  });

  it('should end on results view (medium)', async () => {
    await goToResults('medium')
  });

  it('should end on results view (easy)', async () => {
    await goToResults('easy')
  });
});
