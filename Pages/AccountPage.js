export default class AccountPage {

    constructor(/** @type {import('@playwright/test').Page} */ page) {
        this.page = page;
        this.welcomeText = page.locator('text =Hello John Smith  ')
        this.dropdown = page.locator("#listAccounts")
        this.goBtn = page.locator("#btnGetAccount")
    }
    async getText() {
        return await this.welcomeText.textContent()
    }
    async selectDropdown() {
        await this.dropdown.selectOption({ value: '800003' });
    }
    async clickGoBtn() {
        await this.goBtn.click()
    }
    async getDropTexts() {
        // Returns an array of all option texts
        const options = this.dropdown.locator('option');
        return await options.allTextContents();
    }
}