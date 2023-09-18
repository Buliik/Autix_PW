import { test, expect } from '@playwright/test';
import { HomePage } from '../POM/home-page.ts';

test('zmena jazyka', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
  })