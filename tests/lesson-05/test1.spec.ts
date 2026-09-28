// Tạo file test1.spec.ts.
//  Truy cập trang https://material.playwrightvn.com/, 
// click vào “Bài học 1: Register Page (có đủ các element)”
// Nhập thông tin cho các field: Username, Email, Gender, Hobbies, Interests, Country, Date of Birth, Profile Picture, Biography
// Click button Register

import { test, expect } from '@playwright/test';
test('get started link', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await page.getByRole('link', { name: 'Bài học 1: Register Page (có đủ các element)' }).click();
    await expect(page).toHaveTitle(/User Registration/);

    await test.step('Input username', async () => {
        await page.getByRole('textbox', { name: 'username' }).fill('Thao');
    });

    await test.step('Input Email', async () => {
        await page.getByRole('textbox', { name: 'email' }).fill('thao@123.com');
    });

    await test.step('Check Gender:', async () => {
        await page.getByRole('radio', { name: 'Female' }).check();
    });

    await test.step('Check Hobbies:', async () => {
        await page.getByRole('checkbox', { name: 'Reading' }).check();
        await page.getByRole('checkbox', { name: 'Cooking' }).check();
    });

    await test.step('Choose Interests', async () => {
        await page.getByRole('listbox', { name: 'Interests' }).selectOption(['Music', 'Art']);
    });// nếu cho chọn nhiều thì type là listbox

    await test.step('Country', async () => {
        await page.getByRole('combobox', { name: 'Country' }).selectOption('Canada');
    });// nếu cho chọn 1 thì type là combobox

    await test.step('DOB', async () => {
        // await page.getByRole('generic',{name:'mm/dd/yyyy'}).fill('09-09-2002')
        await page.getByLabel('Date of Birth:').fill('2002-09-09');
    });

    await test.step('Profile Picture', async () => {
        await page.getByLabel('Profile Picture:').setInputFiles('tests/testdata.md');// đổi dấu \ thành / thì mới hiểu được file
    });

    await test.step('Biography', async () => {
        await page.getByLabel('Biography:').fill('1234567890');
    });

    await test.step('Register', async () => {
        await page.getByRole('button', { name: 'Register' }).click();
    });


})
