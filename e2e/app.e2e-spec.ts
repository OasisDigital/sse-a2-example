import { SseA2ExamplePage } from './app.po';

describe('sse-a2-example App', function() {
  let page: SseA2ExamplePage;

  beforeEach(() => {
    page = new SseA2ExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
