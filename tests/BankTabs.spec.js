import { test, expect } from '@playwright/test';
import LoginPage from '../Pages/LoginPage';
import AccountPage from '../Pages/AccountPage';
import TransactionPage from '../Pages/TransactionsPage'

test('Account Statement opens in new tab @login', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();

    const loginPage = new LoginPage(page)
    const transactPage = new TransactionPage(page)

    await loginPage.goTo()
    await loginPage.login('jsmith', 'demo1234');
    await Promise.all([
        page.waitForLoadState("networkidle"), // Wait for load tab
        page.click('#MenuHyperLink1')   // Action that triggers in same tab
    ]);
    const accountPage = new AccountPage(page)
    const text = await accountPage.getText()
    console.log(text)
    expect(text).toBeTruthy()
    await accountPage.selectDropdown()
    const allTextsInDropdown = await accountPage.getDropTexts()
    console.log("dropTexts ", allTextsInDropdown)//print dropdowns in array formate
    for (const item of allTextsInDropdown) { //print line by line by looping
        console.log(item)
    }
    for (let i = 0; i < allTextsInDropdown.length; i++) {
        console.log(allTextsInDropdown[i]);
    }
    const number = await allTextsInDropdown.length
    console.log(number)
    await accountPage.goBtn.click()
    await Promise.all([
        page.waitForLoadState("networkidle"), // Wait for load tab
        page.click('#MenuHyperLink2')   // Action that triggers in same tab
    ]);
    const text2 = await transactPage.getTransactionsText()
    console.log(text2)

})