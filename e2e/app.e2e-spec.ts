import { AngFirePage } from './app.po';

describe('ang-fire App', () => {
  let page: AngFirePage;

  beforeEach(() => {
    page = new AngFirePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
