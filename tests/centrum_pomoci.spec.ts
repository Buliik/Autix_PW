import { test, expect } from '@playwright/test';
import { HelpCenterPage } from '../POM/help-center-page.ts';


test('doplnkove sluzby', async ({ page }) => {
  const helpCenterPage = new HelpCenterPage(page);
  await helpCenterPage.goto();
  await helpCenterPage.search('autopůjčovna');
  await helpCenterPage.validate('heading','Doplňkové služby');
});

test('routing na autix', async ({ page }) => {
  const helpCenterPage = new HelpCenterPage(page);
  await helpCenterPage.goto();
  await helpCenterPage.validateMainPageRouting();
})

