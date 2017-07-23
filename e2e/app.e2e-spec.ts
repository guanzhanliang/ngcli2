import { NgcliPage } from './app.po';

describe('ngcli App', () => {
  let page: NgcliPage;

  beforeEach(() => {
    page = new NgcliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
