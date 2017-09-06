import { IshoddyAngular4Page } from './app.po';

describe('ishoddy-angular4 App', () => {
  let page: IshoddyAngular4Page;

  beforeEach(() => {
    page = new IshoddyAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
