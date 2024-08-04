import { expect, Locator, Page } from '@playwright/test';

export class Product {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async goto() {
		await this.page.goto(
			'https://test.onmarket.id/store/store-product?store_name=KINDER%20GARDEN%20SEDAYU%20CITY',
		);
	}

	async chooseProduct(productName: string) {
		await this.page
			.getByRole('link', {
				name: productName,
				exact: true,
			})
			.click();

		await expect(this.page).toHaveURL(/https:\/\/test\.onmarket\.id\/product/);
	}
}
