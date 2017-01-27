import { NgStarwarsPage } from './app.po';

describe('ng-starwars App', function() {
  let page: NgStarwarsPage;

  beforeEach(() => {
    page = new NgStarwarsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
