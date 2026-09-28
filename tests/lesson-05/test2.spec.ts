// Tạo file test2.spec.ts. Truy cập trang https://material.playwrightvn.com/, click vào “Bài học 2: Product page”, hãy thêm sản phẩm để giỏ hàng có số lượng sản phẩm như sau:
// Sản phẩm 1: 2 sản phẩm
// Sản phẩm 2: 3 sản phẩm
// Sản phẩm 3: 1 sản phẩm

import { test, expect } from '@playwright/test';
async function themHang(page, tensp, quanlity) {
    // const productName = page.getByRole('region').filter({ hasText: tensp});
    const productName = page.locator('div.product').filter({ has: page.getByText(tensp, { exact: true }) });//tìm đến các thẻ div product và lọc theo tên sản phẩm được truyền vào

    const addCart = productName.getByRole('button', { name: "Add to Cart" });
    for (let i = 0; i < quanlity; i++) {
        await addCart.click();
        await page.waitForTimeout(300);
    }

}
test('get started link', async ({ page }) => {
    await page.goto('https://material.playwrightvn.com/');

    await test.step('Click Bài học 2: Product page', async () => {
        await page.getByRole('link', { name: 'Bài học 2: Product page' }).click();
    });
    await themHang(page, 'Product 1', 2);
    await themHang(page, 'Product 2', 3);

    // await test.step('Add 2 san pham 1', async () => {
    //     await page.getByRole('region').filter({ hasText: 'Produc 1' });
    //     await page.getByRole('button', { name: "Add to Cart" }).first().click();
    //     await page.getByRole('button', { name: "Add to Cart" }).first().click();
    // });


})