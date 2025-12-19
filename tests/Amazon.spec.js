import { chromium, test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { encrypt, decrypt } from '../utils/encrypt';
//import 'dotenv/config';

test.describe('Amazon Automation', () => {
  test('Amazon', async ({ page }) => {
    const home = new HomePage(page);

    // const searchProduct = encrypt(process.env.SEARCHPRODUCT);
    console.log("hello" + process.env.ENCRYPTED_SEARCHPRODUCT);
    const searchProduct = decrypt(process.env.ENCRYPTED_SEARCHPRODUCT);
    console.log("-" + searchProduct);

    // console.log('ENCRYPTED_SEARCHPRODUCT=', encrypt('laptop'));
    await home.goto();
    const continueShoppinButton = await page.locator('//*[text()="Continue shopping"]').isVisible();

    if (continueShoppinButton) {
      await page.locator('//*[text()="Continue shopping"]').click();
    }
    elif(chromiumError)
    {
     
     await page.locator('//*[text()="Go to the Amazon.in home page to continue shopping"]').click();

    }

    await home.searchProduct(searchProduct);



  });
});

