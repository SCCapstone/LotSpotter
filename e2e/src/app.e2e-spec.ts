import { browser, element, by } from 'protractor';
import { AppPage } from './app.po';

<<<<<<< HEAD
// describe('Login', () => {
//   let page: AppPage;

//   beforeEach(() => {
//     browser.get("/")
//   });

//   it('should launch to a login screen and navigate to the homepage upon successful login, allowing the user to logout', () => {

//     var emailEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/form/ion-item[1]/ion-input/input'));
//     var passwordEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/form/ion-item[2]/ion-input/input'));
//     var loginEl = element(by.css('ion-row.md:nth-child(3) > ion-col:nth-child(1) > ion-button:nth-child(1)'));
//     var logOutEl = element(by.className('md button button-block button-solid ion-activatable ion-focusable hydrated'));
//    emailEl.clear().then(() => {
//      emailEl.sendKeys('test@test.com')
//         })

//    passwordEl.clear().then(() => {
//     passwordEl.sendKeys('testtest')
//    })     
//    loginEl.click()
   
//    browser.get('/home');
//    logOutEl.click();
//   });
// });

describe('SignUp', () =>{
=======
describe('Basic Functionality', () => {
>>>>>>> 755effafabce88fb2b50e08973e59c8fcb597cc0
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.get("/")
  });

<<<<<<< HEAD
  it('should select signup, create an account, and login', () => {
    var s_emailEL = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-signup/ion-content/form/ion-item[1]/ion-input'));
    var s_passswordEL = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-signup/ion-content/form/ion-item[2]/ion-input'));
    var createaccountEL= element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-signup/ion-content/form/ion-row/ion-col/ion-button'));
    var backbuttonEL = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-signup/ion-header/ion-toolbar/ion-buttons/ion-back-button//button'));

    s_emailEL.clear().then(() => {
      s_emailEL.sendKeys('testdel@del.com');  
    })

    s_passswordEL.clear().then(() =>{
      s_passswordEL.sendKeys('testtest');
    })
    createaccountEL.click();
    backbuttonEL.clear();

    browser.get('/login');

    var emailEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/form/ion-item[1]/ion-input/input'));
    var passwordEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/form/ion-item[2]/ion-input/input'));
    var loginEl = element(by.css('ion-row.md:nth-child(3) > ion-col:nth-child(1) > ion-button:nth-child(1)'));
    
    emailEl.clear().then(() => {
      emailEl.sendKeys('testdel@del.com')
    })

    passwordEl.clear().then(() => {
      passwordEl.sendKeys('testtest')
    })     
    
    loginEl.click()   
    browser.get('/home');

  });
=======
  it('The app should launch to a login screen and navigate to the homepage upon successful login, allowing the user to logout', () => {
   page.login('test@test.com', 'testtest')
   page.loadPage('/home');
   page.logout();
   
  });

  //it('The app should allow the user to login and navigate using the homepage')

>>>>>>> 755effafabce88fb2b50e08973e59c8fcb597cc0
});