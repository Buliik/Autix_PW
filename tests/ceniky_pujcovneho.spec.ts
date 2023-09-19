import { test, expect } from '@playwright/test';
import { CenikyPujcovnehoPage } from '../Pages/ceniky-pujcovneho-page.ts';

test('count images', async ({ page }) => {
    const cenikyPujcovnehoPage = new CenikyPujcovnehoPage(page);
    await cenikyPujcovnehoPage.goto();
    let images = await cenikyPujcovnehoPage.countImages();
    expect(images.length).toEqual(6);
    await cenikyPujcovnehoPage.snapshotTest();
  })