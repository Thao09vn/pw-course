import { test } from '@playwright/test';

test('Basic actions', async ({ page }) => {
    await test.step('Mở Page', async () => {
        await page.goto("https://material.playwrightvn.com");

    });

    await test.step('Click vào link', async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });

    await test.step('Input', async () => {
        await page.locator("//input[@id='username']").fill('Thao');
        await page.locator("//input[@id='email']").pressSequentially("thao@123.com", { delay: 1_00, });
    });

    await test.step('Check on radio button:', async () => {
        let isCheckedMale = await page.locator("//input[@id='male']").isChecked();
        console.log(isCheckedMale);

        await page.locator("//input[@id='male']").check();
    });
    await test.step('Select option:', async () => {
        await page.locator("//select[@id='country']").selectOption({ label: 'Canada' })
    });
    // Upload file
    await page.locator("//input[@type='file']").setInputFiles("tests/data-test/data-test.txt");
});