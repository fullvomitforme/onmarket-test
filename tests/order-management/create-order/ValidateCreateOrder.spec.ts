import { test, expect } from '@playwright/test';
import { Order } from '../../../pages/order';
import { Login } from '../../../pages/login';
import { Product } from '../../../pages/product';

test.describe('[ONMARKET] Regression Test - Create New Order', () => {
	test.beforeEach(async ({ page }) => {
		const LoginPage = new Login(page);

		await page.goto('https://test.onmarket.id/');

		const username = 'tazkiyatest';
		const password = 'ucanseemypass77';

		await expect(page).toHaveTitle(
			'ONMARKET - Platform Jual Beli Online Terpercaya',
		);

		await LoginPage.signIn(username, password);

		const profilButton = page.getByRole('button', {
			name: `person Welcome ${username}`,
		});

		await expect(profilButton).toBeVisible();

		await profilButton.click();

		const myProfilButton = page.getByRole('menuitem', {
			name: 'contact_page My Profile',
		});

		await expect(myProfilButton).toBeVisible();

		await myProfilButton.click();

		await expect(page).toHaveURL(
			'https://test.onmarket.id/user/profile/detail-profile',
		);
	});

	test('Verify user can [Checkout] after [Choose Product] successfully', async ({
		page,
	}) => {

		const storeName = 'KINDER%20GARDEN%20SEDAYU%20CITY';

		const ProductPage = new Product(page);

		await ProductPage.goto(storeName);

		// Choose product
		await ProductPage.chooseProduct(
			// The product name is dynamic, so we need to find a way to get the product name from the page
			'product image asdasdas Rp 12 KOTA JAKARTA TIMUR',
		);

		// Click [Checkout] button
		await ProductPage.checkout('Automation Testing Notes');
	});
});
