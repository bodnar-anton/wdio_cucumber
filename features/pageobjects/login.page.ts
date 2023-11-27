import page from './page.ts';

const loginButton = '//*[@resource-id="log-in"]';
const emailInputField = '//android.widget.EditText[1]';
const passwordInputField = '//android.widget.EditText[2]';
const submitButton = '//android.widget.TextView[@text="LOG IN"]';

class LoginPage {
    public async clickLoginButton(): Promise<void> {
        await page.click(loginButton);
    }

    public async enterEmail(email: string): Promise<void> {
        await page.setValue(emailInputField, email);
    }

    public async enterPassword(password: string): Promise<void> {
        await page.setValue(passwordInputField, password);
    }

    public async clickSubmitButton(): Promise<void> {
        await page.click(submitButton);
    }
}

export default new LoginPage();
