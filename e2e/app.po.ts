import { browser, element, by } from 'protractor';

export class Angular4StepByStepPart01YourFirstComponentPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
