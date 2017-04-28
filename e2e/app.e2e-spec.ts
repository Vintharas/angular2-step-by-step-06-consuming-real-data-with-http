import { Angular4StepByStepPart01YourFirstComponentPage } from './app.po';

describe('angular4-step-by-step-part01-your-first-component App', () => {
  let page: Angular4StepByStepPart01YourFirstComponentPage;

  beforeEach(() => {
    page = new Angular4StepByStepPart01YourFirstComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
