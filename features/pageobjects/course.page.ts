import page from './page.ts';

const addContentButton = '//*[@resource-id="add-content-button"]';
const goBackButton = '//android.widget.TextView[@text="Learn"]';
const firstLessonsSection = '//android.widget.TextView[@text="SENCTION NAME"]/..';
const lessonsList = '//*[@resource-id="lesson-node-button"]';
const firstLesson = '//android.widget.TextView[@text="PS-5197 Remember source ticket testing when we have long tit"]/..';

class CoursePage {
    public async waitUntilPageIsOpened(): Promise<void> {
        await page.pause(30000);
        await page.waitUntilElementDisplayed(addContentButton);
        await page.waitUntilElementDisplayed(goBackButton);
        await page.pause(30000);
    }

    public async scrollUntilFirstLessonsSectionDisplayed(): Promise<void> {
        await page.scrollUntilElementDisplayed(firstLessonsSection); 
    }

    public async areLessonsDisplayed(): Promise<boolean> {
        return page.areElementsDisplayed(lessonsList);
    }

    public async clickFirstLesson(): Promise<void> {
        await page.click(firstLesson);
    }
}

export default new CoursePage();
