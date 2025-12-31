export default class LoginPage {

    constructor(/** @type {import('@playwright/test').Page} */ page) {
        this.page = page;
        this.userName = page.locator("#uid")
        this.password = page.locator("#passw")
        this.loginButton = page.locator("[name='btnSubmit']")
    }
    async goTo() {
        await this.page.goto('https://demo.testfire.net/login.jsp');
    }
    async login(user, pass) {
        await this.userName.fill(user)
        await this.password.fill(pass)
        await this.loginButton.click()

    }

}