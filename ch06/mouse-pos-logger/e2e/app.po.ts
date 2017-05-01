import { browser, element, by } from 'protractor';

export class MousePosLoggerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mpl-root h1')).getText();
  }
}
