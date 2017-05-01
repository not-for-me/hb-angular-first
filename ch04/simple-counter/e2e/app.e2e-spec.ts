import { SimpleCounterPage } from './app.po';

describe('simple-counter App', () => {
  let page: SimpleCounterPage;

  beforeEach(() => {
    page = new SimpleCounterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
