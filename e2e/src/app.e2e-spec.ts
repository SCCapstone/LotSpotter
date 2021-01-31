import { browser, element, by } from 'protractor';
import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.get("/")
  });

  it('should have a login screen', () => {
    
   element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/form/ion-item[1]/ion-input/input')).clear().then(() => {element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/form/ion-item[1]/ion-input/input')).sendKeys('test@test.com')})
   //element(by.id("ion-input-1-lbl")).clear().then(() => {element(by.id("ion-input-1-lbl")).sendKeys('testtest')})
   
  });
});
