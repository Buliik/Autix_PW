import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto('http://autix.eu/');
    }

    async setCzechLanguage() {
        await this.page.locator('#shortcode-256-9 div').first().hover();
        await this.page.getByRole('link', { name: 'cs_CZ CS' }).click();
    }

    async setEnglishLanguage() {
        await this.page.locator('#shortcode-256-9 div').first().hover();
        await this.page.getByRole('link', { name: 'en_GB EN' }).click();
    }

    async czechLanguageCheck() {
        await expect(this.page.locator('#text_block-53-9')).toHaveText('Funkce');
        await expect(this.page.locator('#link-523-9')).toHaveText('Podpora');
    }

    async englishLanguageCheck() {
        await expect(this.page.locator('#text_block-53-9')).toHaveText('Features');
        await expect(this.page.locator('#link-523-9')).toHaveText('Support');
    }
}

