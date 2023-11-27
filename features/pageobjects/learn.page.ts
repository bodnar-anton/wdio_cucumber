import page from './page.ts';

const learnTitle = '//android.view.ViewGroup[not(@resource-id="bottom-learn-button")]/android.widget.TextView[@text="Learn"]';
const firstCourse = '//*[@resource-id="course-card"]';
const firstCourseImage = '//*[@resource-id="course-card-image"]';

class LearnPage {
    public async waitUntilPageIsOpened(): Promise<void> {
        await page.pause(30000);
        await page.waitUntilElementDisplayed(learnTitle);
        await page.waitUntilElementDisplayed(firstCourse);
        await page.waitUntilElementDisplayed(firstCourseImage);
        await page.pause(30000);
    }

    public async clickOnFirstCourse(): Promise<void> {
        await page.click(firstCourse);
    }
}

export default new LearnPage();
