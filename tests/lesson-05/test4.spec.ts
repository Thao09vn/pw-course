// Tạo file test4.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 4: Personal notes”.
// Thêm mới 10 note với nội dung sau ở bảng dưới đây.
// Field “Title”: điền nội dung ở cột “Tên action”
// Field “Content”: điền nội dung ở cột “Mô tả”
// Thực hiện search với keyword “một hoặc nhiều”

import { test, expect, Page } from '@playwright/test';
const noteList = [
    { title: 'một hoặc nhiều', content: 'Nội dung ghi chú số 1' },
    { title: 'một', content: 'Nội dung ghi chú số 2' },
    { title: 'Note số 3', content: 'một hoặc nhiều' },
    { title: 'hoặc nhiều', content: 'Nội dung ghi chú số 4' },
    { title: 'Note số 5', content: 'Nội dung ghi chú số 5' },
    { title: 'Note số 6', content: 'Nội dung ghi chú số 6' },
    { title: 'Note số 7', content: 'Nội dung ghi chú số 7' },
    { title: 'Note số 8', content: 'Nội dung ghi chú số 8' },
    { title: 'Note số 9', content: 'Nội dung ghi chú số 9' },
    { title: 'Note số 10', content: 'Nội dung ghi chú số 10' }
];
async function addNewNote(page: Page) {
    for (let i = 0; i < noteList.length; i++) {
        const note = noteList[i];
        await page.getByPlaceholder('Enter note title').fill(note.title);
        await page.getByPlaceholder('Enter note content').fill(note.content);
        await page.getByRole('button', { name: 'Add Note' }).click();
        await page.waitForTimeout(200);
    }

}
test('Test case 1', async ({ page }) => {
    await test.step('Go to Homepage', async () => {
        await page.goto('https://material.playwrightvn.com/');
    });
    await test.step('Click on "Bài học 4: Personal notes"', async () => {
        await page.getByRole('link', { name: 'Bài học 4: Personal notes' }).click();
    });
    await addNewNote(page);
    const searchKeyword = 'một hoặc nhiều';
    await page.getByPlaceholder('Search notes...').fill(searchKeyword);
    await page.waitForTimeout(500);
})
