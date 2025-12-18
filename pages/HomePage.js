export class HomePage {
  constructor(page) {
    this.page = page;
    this.SearchBox = page.locator('//input[@id="twotabsearchtextbox"]');
    this.SearchButton = page.locator('//input[@type="submit"]');
  }


  async goto() {
    await this.page.goto('https://www.amazon.in');
  }

  async SearchProduct(ProductName) {
    await this.SearchBox.fill(ProductName);
    await this.SearchButton.click();
  }


}