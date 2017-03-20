import { Angular2archsPage } from './app.po';

describe('angular2archs App', () => {
  let page: Angular2archsPage;

  beforeEach(() => {
    page = new Angular2archsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
