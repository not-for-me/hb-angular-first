import { CompCommPage } from './app.po';

describe('comp-comm App', () => {
  let page: CompCommPage;

  beforeEach(() => {
    page = new CompCommPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
