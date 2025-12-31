export default class TransactionPage {

    constructor(/** @type {import('@playwright/test').Page} */ page) {
        this.page = page;
        this.transactionPageText = page.locator('h1', { hasText: 'Recent Transactions' });
    }
    async getTransactionsText() {
        return await this.transactionPageText.textContent()
    }
}