import { AppWithBootPage } from './app.po';

describe('app-with-boot App', () => {
  let page: AppWithBootPage;

  beforeEach(() => {
    page = new AppWithBootPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
