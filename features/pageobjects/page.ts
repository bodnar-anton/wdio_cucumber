import { browser } from "@wdio/globals";

class Page {
    public async pause(milliseconds: number): Promise<void> {
        await browser.pause(milliseconds);
    }

    public async startDebugging(): Promise<void> {
        await browser.debug();
    }

    public async getElement(element: string | WebdriverIO.Element): Promise<WebdriverIO.Element> {
        return $(element);
    }

    public getAllElements(elements: string): Promise<WebdriverIO.Element[]> {
        return $$(elements);
    }

    public async getElementByIndex(elements: string, index: number): Promise<WebdriverIO.Element> {
        return (await this.getAllElements(elements))[index];
    }

    public async getLastElement(elements: string): Promise<WebdriverIO.Element> {
        const elementsNumber = (await this.getAllElements(elements)).length;

        return this.getElementByIndex(elements, elementsNumber - 1);
    }

    public async click(element: string | WebdriverIO.Element): Promise<void> {
        await (await this.getElement(element)).click();
    }

    public async clickElementByIndex(elements: string, index: number): Promise<void> {
        await this.click(await this.getElementByIndex(elements, index));
    }

    public async selectOptionByIndex(select: string | WebdriverIO.Element, index: number): Promise<void> {
        await (await this.getElement(select)).selectByIndex(index);
    }

    public async clearValue(element: string | WebdriverIO.Element): Promise<void> {
        await this.click(element);
        while ((await (await this.getElement(element)).getValue()) !== '') {
            await browser.keys(['Control', 'Delete']);
            await browser.keys(['Control', 'Backspace']);
        }
    }

    public async setValue(element: string | WebdriverIO.Element, value: string): Promise<void> {
        await this.waitUntilElementDisplayed(element);
        await (await this.getElement(element)).setValue(value);
    }

    public async sendKeys(value: string): Promise<void> {
        await browser.keys(value);
    }

    public async selectText(element: string | WebdriverIO.Element): Promise<void> {
        const inputField = await this.getElement(element);

        const fieldLocation = await inputField.getLocation();
        const fieldSize = await inputField.getSize();

        const leftEdgeX = fieldLocation.x + 5;
        const centerY = fieldLocation.y + fieldSize.height / 2;

        browser.touchPerform([
        {
            action: 'press',
            options: { x: leftEdgeX, y: centerY },
        },
        {
            action: 'wait',
            options: { ms: 2000 },
        },
        {
            action: 'release',
        },
        ]);
    }

    public async getText(element: string | WebdriverIO.Element): Promise<string> {
        await this.waitUntilElementDisplayed(element);

        return (await this.getElement(element)).getText();
    }

    public async getSelectFieldValue(selectField: string | WebdriverIO.Element): Promise<string> {
        const selectElement = await this.getElement(selectField);
        return await browser.execute((selectFld) => {
            // @ts-ignore
            return selectFld.options[selectFld.selectedIndex].text;
        }, selectElement);
    }

    public async isValueEntered(element: string | WebdriverIO.Element, value: string): Promise<boolean> {
        let text = await this.getText(element);

        return text === value;
    }

    public async isEnteredValueNotEmpty(element: string | WebdriverIO.Element): Promise<boolean> {
        let text = await this.getText(element);

        return text.length > 0;
    }

    public async isCheckboxChecked(checkbox: string | WebdriverIO.Element): Promise<boolean> {
        const checkboxElement = await this.getElement(checkbox);
        return await browser.execute((chkBox) => {
            // @ts-ignore
            return chkBox.checked;
        }, checkboxElement);
    }

    public async moveToElement(element: string | WebdriverIO.Element): Promise<void> {
        await this.waitUntilElementDisplayed(element);
        await (await this.getElement(element)).moveTo();
    }

    public async scrollUntilElementDisplayed(element: string | WebdriverIO.Element): Promise<void> {
        if (await this.isElementDisplayed(element)) {
            return;
        }

        await browser.waitUntil(async () => {
            await this.scrollDown();
            await this.pause(1000);
            return this.isElementDisplayed(element);
        }, { interval: 1000, timeout: 60000 });
    }

    public async scrollDown(): Promise<void> {
        const yCenter = (await browser.getWindowSize()).height / 2;

        await browser.touchAction([
            { action: 'longPress', x: 10, y: yCenter },
            { action: 'moveTo', x: 10, y: yCenter - 300 },
            'release'
        ]);
    }

    public async scrollToTop(): Promise<void> {
        await browser.execute('window.scrollTo(0, 0);');
    }

    public async scrollToBottom(): Promise<void> {
        await browser.execute('window.scrollTo(0, document.body.scrollHeight);');
    }

    public async isElementClickable(element: string | WebdriverIO.Element): Promise<boolean> {
        return (await this.getElement(element)).isClickable();
    }

    public async isElementEnabled(element: string | WebdriverIO.Element): Promise<boolean> {
        return (await this.getElement(element)).isEnabled();
    }

    public async getElementAttribute(element: string | WebdriverIO.Element, attributeName: string): Promise<string> {
        return (await this.getElement(element)).getAttribute(attributeName);
    }

    public async isElementDisplayed(element: string | WebdriverIO.Element): Promise<boolean> {
        return (await this.getElement(element)).isDisplayed();
    }

    public async isElementExisting(element: string | WebdriverIO.Element): Promise<boolean> {
        return (await this.getElement(element)).isExisting();
    }

    public async areElementsDisplayed(elements: string): Promise<boolean> {
        if ((await this.getAllElements(elements)).length === 0) {
            return false;
        }

        for (const element of await this.getAllElements(elements)) {
            if (!(await this.isElementDisplayed(element))) {
                return false;
            }
        }

        return true;
    }

    public async isElementDisplayedInViewport(element: string | WebdriverIO.Element): Promise<boolean> {
        return (await this.getElement(element)).isDisplayedInViewport();
    }

    public async isElementContainsProperty(
        element: string | WebdriverIO.Element,
        propertyName: string,
        propertyValue: string,
    ): Promise<boolean> {
        return (await this.getElementAttribute(element, propertyName)).includes(propertyValue);
    }

    public async waitUntilElementDisplayed(element: string | WebdriverIO.Element): Promise<void> {
        await browser.waitUntil(() => this.isElementDisplayed(element));
    }

    public async waitUntilElementClickable(element: string | WebdriverIO.Element): Promise<void> {
        await browser.waitUntil(() => this.isElementClickable(element));
    }

    public async waitUntilElementsDisplayed(elements: string): Promise<void> {
        await browser.waitUntil(() => this.areElementsDisplayed(elements));
    }

    public async waitUntilElementDisplayedInViewport(element: string | WebdriverIO.Element): Promise<void> {
        await browser.waitUntil(() => this.isElementDisplayedInViewport(element));
    }

    public async waitUntilElementNotDisplayed(element: string | WebdriverIO.Element): Promise<void> {
        await browser.waitUntil(async () => !(await this.isElementDisplayed(element)));
    }

    public async waitUntilElementNotDisplayedInViewport(element: string | WebdriverIO.Element): Promise<void> {
        await browser.waitUntil(async () => !(await this.isElementDisplayedInViewport(element)));
    }

    public async waitUntilElementIncludesText(element: string | WebdriverIO.Element, text: string): Promise<void> {
        await browser.waitUntil(async () => (await this.getText(element)).includes(text));
    }

    public async waitUntilElementContainsProperty(
        element: string | WebdriverIO.Element,
        propertyName: string,
        propertyValue: string,
    ): Promise<void> {
        await browser.waitUntil(() => this.isElementContainsProperty(element, propertyName, propertyValue));
    }

    public async waitUntilElementNotContainsProperty(
        element: string | WebdriverIO.Element,
        propertyName: string,
        propertyValue: string,
    ): Promise<void> {
        await browser.waitUntil(async () => !(await this.isElementContainsProperty(element, propertyName, propertyValue)));
    }

    public async waitUntilElementExists(element: string | WebdriverIO.Element): Promise<void> {
        await browser.waitUntil(() => {
            return this.isElementExisting(element);
        });
    }

    public async waitUntilFound(foundElements: string): Promise<void> {
        await browser.waitUntil(async () => {
            return (await this.getAllElements(foundElements)).length === 1;
        });
    }
}

export default new Page();
