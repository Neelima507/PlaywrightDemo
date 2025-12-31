import { test, expect } from '@playwright/test';

test('test', { tag: '@frames' }, async ({ page }) => {
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html?utm_source=chatgpt.com');
    const iFrame1 = page.frameLocator("#frm1")
    const iFrame2 = page.locator("#frm2")

    await iFrame1.locator(".hub-home").click()
    // wait for header on the new iframe page
    await iFrame1.locator('#Header1_headerimg').waitFor({ state: 'visible' });
    await expect(iFrame1.locator('#Header1_headerimg')).toBeVisible();
    const hyrText = await iFrame1.locator("#Header1_headerimg").getAttribute("alt")
    console.log('Header text:', hyrText);
    expect(hyrText).toBe("HYR")

});

test('Validate iframe is loaded', { tag: '@Scenario1' }, async ({ page }) => {
    // Step 1: Open frames practice page
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');

    // Step 2: Access iframe1 using frameLocator
    const iFrame1 = page.frameLocator('#frm1');

    // Step 3: Verify iframe1 is visible
    await expect(iFrame1.locator('#body-wrapper')).toBeVisible();

    // Step 4: Assert iframe1 contains at least one clickable link
    const linksCount = await iFrame1.locator('a').count();
    console.log('Number of links in iframe1:', linksCount);

    expect(linksCount).toBeGreaterThan(0);
});
test('Validate navigation inside iframe', { tag: '@Scenario2' }, async ({ page }) => {
    // Step 1: Open frames practice page
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');

    // Step 2: Access iframe1 using frameLocator
    const iFrame1 = page.frameLocator('#frm1');
    const homePageLink = page.locator("li[class='hub-home'] a")

    await iFrame1.locator("li[class='hub-home'] a").click()
    await iFrame1.locator("li[class='hub-home'] a").waitFor({ state: 'visible' })
    const hyrTuText = await iFrame1.locator("#Header1_headerimg").getAttribute('alt')
    console.log(hyrTuText)
    expect(hyrTuText).toBe('HYR')


})
test('Click menu item inside iframe and validate page title', { tag: '@scenario3' }, async ({ page }) => {
    // Step 1: Open frames practice page
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
    const iFrame1 = page.frameLocator('#frm1');
    await expect(iFrame1.locator('body')).toBeVisible();
    // Step 3: Click Selenium Practice link
    const seleniumLink = iFrame1.locator('a:has-text("Selenium Practice")');
    await seleniumLink.waitFor({ state: 'visible' }); // wait for element to appear
    await seleniumLink.click();
})
test('Click contact dropdown', { tag: '@scenario4' }, async ({ page }) => {
    // Step 1: Open frames practice page
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');
    const iFrame1 = page.frameLocator('#frm1');
    const iFrame2 = page.frameLocator("#frm2")
    await expect(iFrame1.locator('body')).toBeVisible();
    await iFrame1.locator("#selectnav2").selectOption({ index: 3 })
    await iFrame1.locator("#selectnav1").waitFor({ state: 'visible' })
    await iFrame1.locator("#selectnav1").selectOption({ index: 10 })
    const mainPageText = await page.locator(".entry-title").textContent()
    console.log(mainPageText)
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    await iFrame2.locator("#selectnav2").selectOption({ label: 'Home' })
    await iFrame2.locator("#selectnav1").waitFor({ state: 'visible' })
    await iFrame2.locator("#selectnav1").selectOption({ index: 10 })
})
test('verify menu links', { tag: '@scenario5' }, async ({ page }) => {
    // Step 1: Open frames practice page
    await page.goto('https://www.hyrtutorials.com/p/frames-practice.html');

    // Step 2: Access iframe1
    const iFrame1 = page.frameLocator('#frm1');

    // Step 3: Wait for iframe body to be visible
    await expect(iFrame1.locator('body')).toBeVisible();

    // Step 4: Capture all links inside iframe
    const links = iFrame1.locator('a');
    const count = await links.count();
    console.log('Number of links in iframe1:', count);

    // Step 5: Print all link texts
    for (let i = 0; i < count; i++) {
        const text = await links.nth(i).innerText();
        console.log(text);
    }

    // Step 6: Assert number of links is greater than 5
    expect(count).toBeGreaterThan(5);
    page.waitForEvent("")
});