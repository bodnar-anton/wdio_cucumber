import page from './page.ts';

const backButton = '//android.widget.TextView[@text="2 Level Carousel vie..."]';
const addContentButton = '//*[@resource-id="add-content-button"]';
const widgetsWindow = '//*[@resource-id="com.p6wygyqnmmok.pt0nvovg38app:id/action_bar_root"]';
const addTextWidgetButton = '//android.view.ViewGroup[@resource-id="add-Text-widget-button"]';
const addImageWidgetButton = '//android.view.ViewGroup[@resource-id="add-Image-widget-button"]';
const addVideoWidgetButton = '//android.view.ViewGroup[@resource-id="add-Clip-widget-button"]';
const addAudioWidgetButton = '//android.view.ViewGroup[@resource-id="add-Audio-widget-button"]';
const addFileWidgetButton = '//android.view.ViewGroup[@resource-id="add-DocumentCollection-widget-button"]';
const addButtonWidgetButton = '//android.view.ViewGroup[@resource-id="add-Button-widget-button"]';
const addStopwatchWidgetButton = '//android.view.ViewGroup[@resource-id="add-Timer-widget-button"]';
const addCalendlyWidgetButton = '//android.view.ViewGroup[@resource-id="add-Calendly-widget-button"]';
const addTypeformWidgetButton = '//android.view.ViewGroup[@resource-id="add-TypeForm-widget-button"]';
const textWidgets = '//android.view.View[@resource-id="editor-container"]/android.widget.EditText';
const headerModificationOption = '//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ImageView';
const boldModificationOption = '//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView';
const italicModificationOption = '//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.ImageView';
const underlineModificationOption = '//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.ImageView';
const quoteModificationOption = '//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[6]/android.widget.ImageView';
const numericListModificationOption = '//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[7]/android.widget.ImageView';
const listModificationOption = '//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[8]/android.widget.ImageView';
const selectedBoldModificationOption = '//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup';
const selectedItalicModificationOption = '//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup';
const selectedUnderlineModificationOption = '//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup';
const selectedListModificationOption = '//android.widget.HorizontalScrollView/android.view.ViewGroup/android.view.ViewGroup[8]/android.view.ViewGroup';

class LessonPage {
    public async waitUntilPageIsOpened(): Promise<void> {
        await page.pause(10000);
        await page.waitUntilElementDisplayed(backButton);
        await page.waitUntilElementDisplayed(addContentButton);
        await page.pause(10000);
    }

    public async clickAddContentButton(): Promise<void> {
        await page.click(addContentButton);
    }

    public async waitUntilWidgetsWindowIsDisplayed(): Promise<void> {
        await page.waitUntilElementDisplayed(widgetsWindow);
        await page.pause(10000);
    }

    public async isAddTextWidgetButtonDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(addTextWidgetButton);
    }

    public async isAddImageWidgetButtonDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(addImageWidgetButton);
    }

    public async isAddVideoWidgetButtonDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(addVideoWidgetButton);
    }

    public async isAddAudioWidgetButtonDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(addAudioWidgetButton);
    }

    public async isAddFileWidgetButtonDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(addFileWidgetButton);
    }

    public async isAddButtonWidgetButtonDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(addButtonWidgetButton);
    }

    public async isAddStopwatchWidgetButtonDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(addStopwatchWidgetButton);
    }

    public async isAddCalendlyWidgetButtonDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(addCalendlyWidgetButton);
    }

    public async isAddTypeformWidgetButtonDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(addTypeformWidgetButton);
    }

    public async clickAddTextWidgetButton(): Promise<void> {
        await page.click(addTextWidgetButton);
    }

    public async waitUntilNewTextWidgetIsDisplayed(): Promise<void> {
        await page.waitUntilElementDisplayed(textWidgets);
        await page.pause(15000);
    }

    public async isNewTextWidgetDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(textWidgets);
    }

    public async clickOnTheNewTextWidget(): Promise<void> {
        const allTextWidgets = await page.getAllElements(textWidgets);
        await page.clickElementByIndex(textWidgets, allTextWidgets.length - 1);
    }

    public async enterTextToTheNewTextWidget(text: string): Promise<void> {
        const allTextWidgets = await page.getAllElements(textWidgets);
        const lastTextWidget = await page.getElementByIndex(textWidgets, allTextWidgets.length - 1);
        await page.setValue(lastTextWidget, text);
    }

    public async getTheNewTextWidgetText(): Promise<string> {
        const allTextWidgets = await page.getAllElements(textWidgets);
        const lastTextWidget = await page.getElementByIndex(textWidgets, allTextWidgets.length - 1);
        
        return page.getText(lastTextWidget);
    }

    public async selectTheTextInTheNewTextWidget(): Promise<void> {
        const allTextWidgets = await page.getAllElements(textWidgets);
        const lastTextWidget = await page.getElementByIndex(textWidgets, allTextWidgets.length - 1);
        await page.selectText(lastTextWidget);
    }

    public async isHeaderModificationOptionDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(headerModificationOption);
    }

    public async isBoldModificationOptionDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(boldModificationOption);
    }

    public async isItalicModificationOptionDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(italicModificationOption);
    }

    public async isUnderlineModificationOptionDispalyed(): Promise<boolean> {
        return page.isElementDisplayed(underlineModificationOption);
    }

    public async isQuoteModificationOptionDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(quoteModificationOption);
    }

    public async isNumericListModificationOptionDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(numericListModificationOption);
    }

    public async islistModificationOptionDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(listModificationOption);
    }

    public async clickheaderModificationOption(): Promise<void> {
        await page.click(headerModificationOption);
        await page.pause(300);
    }

    public async clickBoldModificationOption(): Promise<void> {
        await page.click(boldModificationOption);
        await page.pause(300);
    }

    public async clickItalicModificationOption(): Promise<void> {
        await page.click(italicModificationOption);
        await page.pause(300);
    }

    public async clickUnderlineModificationOption(): Promise<void> {
        await page.click(underlineModificationOption);
        await page.pause(300);
    }

    public async clickQuoteModificationOption(): Promise<void> {
        await page.click(quoteModificationOption);
        await page.pause(300);
    }

    public async clickNumericListModificationOption(): Promise<void> {
        await page.click(numericListModificationOption);
        await page.pause(300);
    }

    public async clickListModificationOption(): Promise<void> {
        await page.click(listModificationOption);
        await page.pause(300);
    }

    public async isSelectedBoldModificationOptionDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(selectedBoldModificationOption);
    }

    public async isSelectedItalicModificationOptionDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(selectedItalicModificationOption);
    }

    public async isSelectedUnderlineModificationOptionDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(selectedUnderlineModificationOption);
    }

    public async isSelectedListModificationOptionDisplayed(): Promise<boolean> {
        return page.isElementDisplayed(selectedListModificationOption);
    }
}

export default new LessonPage();
