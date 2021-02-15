import { browser, element, by } from 'protractor';
import { AppPage } from './app.po';

describe('Basic Functionality', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.get("/")
  });

  it('The app should launch to a login screen and navigate to the homepage upon successful login, allowing the user to logout', () => {
   page.login('test@test.com', 'testtest')
   page.loadPage('/home');
   page.logout();
   
  });

  //it('The app should allow the user to login and navigate using the homepage')

});