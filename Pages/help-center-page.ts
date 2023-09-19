import { expect, type Locator, type Page } from '@playwright/test';

export class HelpCenterPage {
    readonly page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('https://help.autix.eu/cs');
    }

    async gotoCenikyPujcovneho() {
        await this.page.goto('https://help.autix.eu/cs/article/ceniky-pujcovneho');
    }

    async search(term: string) {
        await this.page.getByRole('textbox', { name: 'Co hledáte?' }).fill(term);
        await this.page.getByRole('button', { name: '' }).click();
    }

    async findInSearchResults(term: string) {
        await this.page.getByText(term).click();
    }

    async validate(role, name: string) {
        await expect(this.page.getByRole(role, {name: name})).toBeEnabled();
    }

    async validateMainPageRouting() {
        await this.page.getByRole('link', { name: ' Autix' }).click();
        await expect(this.page).toHaveURL('https://autix.eu/');
        await this.page.goBack();
    }

    async countImages() {
        const images = await this.page.getByRole('img').all();
        return images;
    }

    async snapshotTest() {
        await expect(this.page).toHaveScreenshot();
    }
}

