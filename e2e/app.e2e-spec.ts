import { DeptReportAppPage } from './app.po';

describe('dept-report-app App', function() {
  let page: DeptReportAppPage;

  beforeEach(() => {
    page = new DeptReportAppPage();
  });

  it('呈現首頁訊息', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('分攤表及明細');
  });
});
