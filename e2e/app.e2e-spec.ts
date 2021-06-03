import { AppPage } from './app.po';

describe('text-compare-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display text compare title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Text Compare');
  });
});
