import { DeptReportAppPage } from './app.po';

describe('dept-report-app App', function() {
  let page: DeptReportAppPage;

  beforeEach(() => {
    page = new DeptReportAppPage();
  });

  it('科報系統首頁標題', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('科報系統');
  });
});
