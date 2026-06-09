import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.emag.ro/');
  await page.getByRole('button', { name: 'Refuză toate' }).click();
  await page.getByRole('link', { name: 'Contul meu', exact: true }).click();
  await page.getByRole('textbox', { name: 'Introdu adresa de email' }).click();
  await page.locator('body').click();
  await page.getByText('Un cont, mai multe beneficii! Plăți sigure și rapide cu cardul Finanțare rapid').click();
});