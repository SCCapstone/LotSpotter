import { browser, element, by } from 'protractor';
import { AppPage } from './app.po';

describe('Login', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.get("/")
  });

  it('should launch to a login screen and navigate to the homepage upon successful login, allowing the user to logout', () => {

    var emailEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/form/ion-item[1]/ion-input/input'));
    var passwordEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/form/ion-item[2]/ion-input/input'));
    var loginEl = element(by.css('ion-row.md:nth-child(3) > ion-col:nth-child(1) > ion-button:nth-child(1)'));
    var logOutEl = element(by.className('md button button-block button-solid ion-activatable ion-focusable hydrated'));
   emailEl.clear().then(() => {
     emailEl.sendKeys('test@test.com')
        })

   passwordEl.clear().then(() => {
    passwordEl.sendKeys('testtest')
   })     
   loginEl.click()
   
   browser.get('/home');
   logOutEl.click()
   





   
        
   


  
   
  });
});
