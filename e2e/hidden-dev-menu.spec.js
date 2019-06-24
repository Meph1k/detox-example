describe('Hidden dev menu', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should reset capitals after going back', async () => {
    await element(by.id('hidden-dev-menu-button')).longPress(5000)
    await element(by.id('hidden-dev-menu-button')).multiTap(4)
    await expect(element(by.id('hidden-dev-menu'))).toBeVisible()

    await element(by.id('hidden-dev-menu-close-button')).tap()
    await expect(element(by.id('hidden-dev-menu'))).toBeNotVisible()
  });
});
