import { MousePosLoggerPage } from './app.po';

describe('mouse-pos-logger App', () => {
  let page: MousePosLoggerPage;

  beforeEach(() => {
    page = new MousePosLoggerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mpl works!');
  });
});
