import { DeptReportAppPage } from './app.po';

describe('dept-report-app App', function() {
  let page: DeptReportAppPage;

  beforeEach(() => {
    page = new DeptReportAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
