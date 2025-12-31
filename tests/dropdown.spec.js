import { test, expect } from '@playwright/test';

test('dropdown', { tag: '@drop' }, async ({ page }) => {
    await page.goto('https://www.magupdate.co.uk/magazine-subscription/PHRR');
    const dropdownCountry = page.locator("#Contact_CountryCode")
    await dropdownCountry.click()
    const options = await dropdownCountry.locator('option').allTextContents()
    console.log('Total countries:', await options.length);
    await expect(options.length).toBe(252)
    await dropdownCountry.selectOption({ label: 'Albania' });
    const selectedValue = await dropdownCountry.inputValue();
    console.log('Selected country:', selectedValue);
    await expect(dropdownCountry).toHaveValue('AL');
    for (const option of options) {
        console.log(option)
    }
    await dropdownCountry.selectOption({ index: 10 });
    await dropdownCountry.selectOption({ value: 'AF' });
    console.log("end")



})


test('handle multiple tabs', { tag: '@tabs' }, async ({ page, context }) => {
    // 1️⃣ Go to the demo page
    await page.goto('https://ui.vision/demo/tabs');

    // 2️⃣ Wait for new tab and click at same time
    const [newTab] = await Promise.all([
        context.waitForEvent('page'),
        page.click('a[target="_blank"]') // link that opens a new tab
    ]);

    // 3️⃣ Wait for the new tab to fully load
    await newTab.waitForLoadState();

    // 4️⃣ Perform validation in new tab
    console.log('New Tab URL:', newTab.url());
    await expect(newTab).toHaveURL(/ui.vision/);

    // 5️⃣ You can also interact with the new tab
    // await newTab.locator('selector').click();

    // 6️⃣ Close new tab when done
    await newTab.close();
    // 7️⃣ Return to original tab
    await expect(page).toHaveURL('https://ui.vision/demo/tabs');
});