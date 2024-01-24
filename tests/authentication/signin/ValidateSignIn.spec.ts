import { test, expect } from '@playwright/test';
import { SignUp } from '@pages/signup';

test('User can Sign Up Successfully', async ({ page }) => {
	const signUpPage = new SignUp(page);

	const email = 'tazkiyadigitalarchive@gmail.com';
	const phoneNumber = '081381977551';
	const username = 'tzkymjhd';
	const firstName = 'Tazkiya';
	const lastName = 'Mujahid';
	const password = 'tzkymjhd';

	await signUpPage.goto();
	await expect(page).toHaveTitle(
		'ONMARKET - Platform Jual Beli Online Terpercaya',
	);

	await signUpPage.signUp(
		email,
		phoneNumber,
		username,
		firstName,
		lastName,
		password,
	);
});
