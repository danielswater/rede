import { RedesexPage } from './app.po';

describe('redesex App', () => {
  let page: RedesexPage;

  beforeEach(() => {
    page = new RedesexPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
