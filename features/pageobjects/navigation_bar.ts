import page from './page.ts';

const learnButton = '//*[@resource-id="bottom-learn-button"]/android.widget.TextView[1]';

class NavigationBar {
    public async clickLearnButton(): Promise<void> {
        await page.click(learnButton);
    }
}

export default new NavigationBar();
