import { Locator, Page } from '@playwright/test';

export class SignUp {
	readonly page: Page;
	readonly password: Locator;
	readonly signUporSignInButton: Locator;
	readonly chooseSignUpButton: Locator;
	readonly signUpButton: Locator;
	readonly email: Locator;
	readonly phoneNumber: Locator;
	readonly firstName: Locator;
	readonly lastName: Locator;
	readonly username: Locator;

	constructor(page: Page) {
		this.page = page;
		this.signUporSignInButton = page.getByRole('button', {
			name: 'person Masuk/Daftar',
		});
		this.chooseSignUpButton = page.getByRole('link', { name: 'Daftar' });
		this.email = page.getByPlaceholder('Email');
		this.phoneNumber = page.getByPlaceholder('Phone Number');
		this.username = page.getByPlaceholder('Username');
		this.firstName = page.getByPlaceholder('First Name');
		this.lastName = page.getByPlaceholder('Last Name');
		this.password = page.getByPlaceholder('Password');
		this.signUpButton = page.getByRole('button', { name: 'Sign Up' });
	}

	async goto() {
		await this.page.goto('https://test.onmarket.id/');
	}

	async signUp(
		email: string,
		phoneNumber: string,
		username: string,
		firstName: string,
		lastName: string,
		password: string,
	) {
		await this.signUporSignInButton.click();
		await this.chooseSignUpButton.click();
		await this.email.fill(email);
		await this.phoneNumber.fill(phoneNumber);
		await this.username.fill(username);
		await this.firstName.fill(firstName);
		await this.lastName.fill(lastName);
		await this.password.fill(password);
		await this.signUpButton.click();
	}
}
