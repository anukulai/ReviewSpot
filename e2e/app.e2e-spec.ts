import { ReviewSpotnewPage } from './app.po';

describe('review-spotnew App', function() {
  let page: ReviewSpotnewPage;

  beforeEach(() => {
    page = new ReviewSpotnewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
