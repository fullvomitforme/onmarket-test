import { Locator, Page } from '@playwright/test';

export class Login {
	readonly page: Page;
	readonly signUporSignInButton: Locator;
	readonly usernameField: Locator;
	readonly passwordField: Locator;
	readonly SignIn: Locator;
	readonly rememberMeCheckbox: Locator;
	readonly okButton: Locator;

	constructor(page: Page) {
		this.page = page;

		this.signUporSignInButton = page.getByRole('button', {
			name: 'person Masuk/Daftar',
		});

		this.usernameField = page.getByRole('textbox', { name: 'Username/Email' });

		this.passwordField = page.getByPlaceholder('Masukkan kata sandi');

		this.rememberMeCheckbox = page.getByText('Ingat saya');

		this.SignIn = page.getByRole('button', {
			name: 'Sign In',
		});

		this.okButton = page.getByRole('button', { name: 'OK' });
	}

	async goto() {
		await this.page.goto('/');
	}

	async signIn(username: string, password: string) {
		await this.signUporSignInButton.click();

		await this.usernameField.fill(username);

		await this.passwordField.fill(password);

		await this.rememberMeCheckbox.click();

		await this.SignIn.click();

		await this.okButton.click();
	}
}
