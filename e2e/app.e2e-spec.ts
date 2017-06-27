import { AngularGroundhogPage } from './app.po';

describe('angular-groundhog App', () => {
  let page: AngularGroundhogPage;

  beforeEach(() => {
    page = new AngularGroundhogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
