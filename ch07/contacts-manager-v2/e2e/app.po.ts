import { browser, element, by } from 'protractor';

export class ContactsManagerV2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cm2-root h1')).getText();
  }
}
