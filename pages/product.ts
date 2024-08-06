import { expect, Locator, Page } from '@playwright/test';

export class Product {
	readonly page: Page;
	readonly beliSekarangButton: Locator;
	readonly ubahAlamatButton: Locator;
	readonly closeButton: Locator;
	readonly pesanUntukPenjual: Locator;
	readonly opsiPengirim: Locator;

	constructor(page: Page) {
		this.page = page;

		this.beliSekarangButton = page.getByText('local_shippingBeli Sekarang');

		this.ubahAlamatButton = page.getByRole('button', { name: 'Ubah Alamat' });

		this.closeButton = page.getByRole('button', { name: '×' });

		this.pesanUntukPenjual = page.locator('#mat-input-2');

		this.opsiPengirim = page.getByText('Reguler');
	}

	async goto(storeName: string) {
		await this.page.goto(
			`https://test.onmarket.id/store/store-product?store_name=${storeName}`,
		);
	}

	async chooseProduct(productName: string) {
		await this.page
			.getByRole('link', {
				name: productName,
				exact: true,
			})
			.click();

		await expect(this.page).toHaveURL(/.*product/);
	}

	async checkout(pesanUntukPenjual: string) {
		await this.beliSekarangButton.click();

		// Wait for the page to navigate to the checkout page
		await expect(this.page).toHaveURL(/.*checkout/);

		// Verify Ubah Alamat button is visible
		await expect(this.ubahAlamatButton).toBeVisible();

		// Click Ubah Alamat button
		await this.ubahAlamatButton.click();

		// Close the modal
		await expect(this.closeButton).toBeVisible();
		await this.closeButton.click();

		// Add pesan untuk penjual
		await expect(this.pesanUntukPenjual).toBeVisible();
		await this.pesanUntukPenjual.fill(pesanUntukPenjual);

		// open opsi pengirim
		await expect(this.opsiPengirim).toBeVisible();
		await this.opsiPengirim.click();
	}
}
