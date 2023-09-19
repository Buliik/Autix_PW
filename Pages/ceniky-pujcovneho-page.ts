import { expect, type Locator, type Page } from '@playwright/test';

export class CenikyPujcovnehoPage {
    readonly page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://help.autix.eu/cs/article/ceniky-pujcovneho');
    }

    async countImages() {
        const images = await this.page.getByRole('img').all();
        return images;
    }

    async snapshotTest() {
        await expect(this.page).toHaveScreenshot();
    }

}