import { NestedFirebaseAngularCliPage } from './app.po';

describe('nested-firebase-angular-cli App', function() {
  let page: NestedFirebaseAngularCliPage;

  beforeEach(() => {
    page = new NestedFirebaseAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
