import { SimpleCommerceManagerPage } from './app.po';

describe('simple-commerce-manager App', () => {
  let page: SimpleCommerceManagerPage;

  beforeEach(() => {
    page = new SimpleCommerceManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('scm works!');
  });
});
