import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Amazon Automation', () => {
  test('Amazon', async ({ page }) => {
    const home = new HomePage(page);



    await home.goto();
    await home.searchProduct('laptop');
  });
});

 