import { browser, element, by } from 'protractor';

export class ContactsManagerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cm-root h1')).getText();
  }
}
