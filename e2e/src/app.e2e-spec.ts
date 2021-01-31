import { browser, element, by } from 'protractor';
import { AppPage } from './app.po';

describe('login', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.get("/")
  });

  it('should launch to a login screen ', () => {

    var emailEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/form/ion-item[1]/ion-input/input'));
    var passwordEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/form/ion-item[2]/ion-input/input'));
    var loginEl = element(by.css('ion-row.md:nth-child(3) > ion-col:nth-child(1) > ion-button:nth-child(1)'));
    //var homeTitleEl = element(by.css('.toolbar-title')).getAttribute('value');
    
   emailEl.clear().then(() => {
     emailEl.sendKeys('test@test.com')
        })

        browser.sleep(5000);
   passwordEl.clear().then(() => {
    passwordEl.sendKeys('testtest')
   })     

        browser.sleep(5000)
   loginEl.click()
        browser.sleep(5000)

   //expect(element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-home/ion-header/ion-toolbar/ion-title')).isPresent()).toBe(true);
  
   
  });
  it('navigates to the homepage upon successful login and logs out', () => {
    // browser.refresh();
    browser.get("/home")
    var logOutEl = element(by.className('md button button-block button-solid ion-activatable ion-focusable hydrated'));
    logOutEl.click();


  });
});