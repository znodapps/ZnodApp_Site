import { ZnodappcliPage } from './app.po';

describe('znodappcli App', () => {
  let page: ZnodappcliPage;

  beforeEach(() => {
    page = new ZnodappcliPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
