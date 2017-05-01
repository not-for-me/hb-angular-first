import { ContactsManagerPage } from './app.po';

describe('contacts-manager App', () => {
  let page: ContactsManagerPage;

  beforeEach(() => {
    page = new ContactsManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cm works!');
  });
});
