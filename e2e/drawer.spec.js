describe('Drawer', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should toggle drawer', async () => {
    await element(by.id('difficulty-level-screen')).swipe('right', 'slow', 0.0001)
    await expect(element(by.id('drawer-menu'))).toBeVisible()

    await element(by.id('difficulty-level-screen')).tapAtPoint({ x: 300, y: 300 })
    await expect(element(by.id('drawer-menu'))).toBeNotVisible()
  });
});
