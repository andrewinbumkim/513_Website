import { DavidPage } from './app.po';

describe('david App', () => {
  let page: DavidPage;

  beforeEach(() => {
    page = new DavidPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
