import { PortfolioSitePage } from './app.po';

describe('portfolio-site App', () => {
  let page: PortfolioSitePage;

  beforeEach(() => {
    page = new PortfolioSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
