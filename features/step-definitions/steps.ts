import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import page from '../pageobjects/page.ts';
import Helper from '../../helper/Helper.ts';
import loginPage from '../pageobjects/login.page.ts';
import discoverPage from '../pageobjects/discover.page.ts';
import navigationBar from '../pageobjects/navigation_bar.ts';
import learnPage from '../pageobjects/learn.page.ts';
import coursePage from '../pageobjects/course.page.ts';
import lessonPage from '../pageobjects/lesson.page.ts';

const email = String(process.env.VALID_EMAIL);
const password = String(process.env.VALID_PASSWORD);
const randomText = Helper.GenerateRandomText();

Given(/^I am on the Learn Page$/, async () => {
    await loginPage.clickLoginButton();
    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.clickSubmitButton();

    await discoverPage.waitUntilPageIsOpened();
    await navigationBar.clickLearnButton();
    await learnPage.waitUntilPageIsOpened();
});

When(/^I click on Course button$/, async () => {
    await learnPage.clickOnFirstCourse();
    await coursePage.waitUntilPageIsOpened();
    await coursePage.scrollUntilFirstLessonsSectionDisplayed();
});
  
Then(/^the list of lessons should be displayed$/, async () => {
    await expect(await coursePage.areLessonsDisplayed()).toBe(true);
});
  
When(/^I click on Lesson$/, async () => {
    await coursePage.clickFirstLesson();
    await lessonPage.waitUntilPageIsOpened();
});
  
When(/^I click on the \+ button$/, async () => {
    await lessonPage.clickAddContentButton();
    await lessonPage.waitUntilWidgetsWindowIsDisplayed();
});
  
Then(/^the various widgets should be displayed$/, async () => {
    await expect(await lessonPage.isAddTextWidgetButtonDisplayed()).toBe(true);
    await expect(await lessonPage.isAddImageWidgetButtonDisplayed()).toBe(true);
    await expect(await lessonPage.isAddVideoWidgetButtonDisplayed()).toBe(true);
    await expect(await lessonPage.isAddAudioWidgetButtonDisplayed()).toBe(true);
    await expect(await lessonPage.isAddFileWidgetButtonDisplayed()).toBe(true);
    await expect(await lessonPage.isAddButtonWidgetButtonDisplayed()).toBe(true);
    await expect(await lessonPage.isAddStopwatchWidgetButtonDisplayed()).toBe(true);
    await expect(await lessonPage.isAddCalendlyWidgetButtonDisplayed()).toBe(true);
    await expect(await lessonPage.isAddTypeformWidgetButtonDisplayed()).toBe(true);
});
  
When(/^I choose Text widget$/, async () => {
    await lessonPage.clickAddTextWidgetButton();
    await lessonPage.waitUntilNewTextWidgetIsDisplayed();
});
  
Then(/^the screen is scrolled down where widget was added$/, async () => {
    await expect(await lessonPage.isNewTextWidgetDisplayed()).toBe(true);
});
  
When(/^I tap to add text$/, async () => {
    await lessonPage.clickOnTheNewTextWidget();
});
  
When(/^enter the random text$/, async () => {
    await lessonPage.enterTextToTheNewTextWidget(randomText);
});
  
Then(/^the text that is being written is visible on the screen$/, async () => {
    await expect(await lessonPage.getTheNewTextWidgetText()).toBe(randomText);

    await page.pause(5000);
    await lessonPage.selectTheTextInTheNewTextWidget();
});
  
When(/^I click on created text$/, async () => {
    await lessonPage.clickOnTheNewTextWidget();
});
  
Then(/^the modifications should be displayed$/, async () => {
    await expect(await lessonPage.isHeaderModificationOptionDisplayed()).toBe(true);
    await expect(await lessonPage.isBoldModificationOptionDisplayed()).toBe(true);
    await expect(await lessonPage.isItalicModificationOptionDisplayed()).toBe(true);
    await expect(await lessonPage.isUnderlineModificationOptionDispalyed()).toBe(true);
    await expect(await lessonPage.isQuoteModificationOptionDisplayed()).toBe(true);
    await expect(await lessonPage.isNumericListModificationOptionDisplayed()).toBe(true);
    await expect(await lessonPage.islistModificationOptionDisplayed()).toBe(true);
});
  
When(/^I apply all modifications on the text$/, async () => {
    await lessonPage.clickheaderModificationOption();
    await lessonPage.clickBoldModificationOption();
    await lessonPage.clickItalicModificationOption();
    await lessonPage.clickUnderlineModificationOption();
    await lessonPage.clickQuoteModificationOption();
    await lessonPage.clickNumericListModificationOption();
    await lessonPage.clickListModificationOption();
});
  
Then(/^changes should be saved immediately$/, async () => {
    await expect(await lessonPage.isSelectedBoldModificationOptionDisplayed()).toBe(true);
    await expect(await lessonPage.isSelectedItalicModificationOptionDisplayed()).toBe(true);
    await expect(await lessonPage.isSelectedUnderlineModificationOptionDisplayed()).toBe(true);
    await expect(await lessonPage.isSelectedListModificationOptionDisplayed()).toBe(true);
});
