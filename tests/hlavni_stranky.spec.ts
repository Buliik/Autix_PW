import { test, expect } from '@playwright/test';
import { HomePage } from '../Pages/home-page.ts';

test('zmena jazyka', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.englishLanguageCheck();
    await homePage.setCzechLanguage();
    await homePage.czechLanguageCheck();
  })