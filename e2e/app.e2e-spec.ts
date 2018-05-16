import { ExerciceAngulrPage } from './app.po';

describe('exercice-angulr App', function() {
  let page: ExerciceAngulrPage;

  beforeEach(() => {
    page = new ExerciceAngulrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
