/* eslint-disable no-undef */
describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Show basic test passed indicator', async () => {
    await expect(element(by.id('test_indicator_success'))).toBeVisible();
  });
});
