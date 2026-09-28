// Tạo file test3.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 3: Todo page”. 
// Thêm mới 100 todo item có nội dung “Todo <i>”
// // Xoá các todo có số lẻ

import { test, expect ,Page} from '@playwright/test';

async function addNumber(page:Page) {
    for (let i = 1; i < 101; i++) {
        if(i%2===0){
        await page.getByPlaceholder('Enter a new task').fill('Todo '+i);
        await page.getByRole('button', { name: 'Add Task' }).click();
        await page.waitForTimeout(10);}

    }
}
test('Test case 1 ', async ({ page }) => {
    await test.step('Step1: Open HomePage', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Step2: Click vào "Bài học 3: Todo page"', async () => {
        await page.getByRole('link', { name: 'Bài học 3: Todo page' }).click();
    });


    await addNumber(page);
    // await test.step('Step 3: Input new task',async()=>{
    //     await page.getByPlaceholder('Enter a new task').fill('100');
    // });

    // await test.step('Step 4: Click vào Add task',async()=>{
    //     await page.getByRole('button',{name:'Add Task'}).click();
    // })
});




