import { ProductManagerPage } from './app.po';

describe('product-manager App', () => {
  let page: ProductManagerPage;

  beforeEach(() => {
    page = new ProductManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('pm works!');
  });
});
