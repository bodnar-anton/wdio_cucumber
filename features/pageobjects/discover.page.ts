import page from './page.ts';

const getItNowButton = '//android.widget.TextView[@text="Get it now!"]';

class DiscoverPage {
    public async waitUntilPageIsOpened(): Promise<void> {
        await page.waitUntilElementDisplayed(getItNowButton);
    }
}

export default new DiscoverPage();
