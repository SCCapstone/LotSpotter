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

  it('The app should allow a user to navigate to the map page', () => {
    page.login('test@test.com', 'testtest')
    page.loadPage('/home');
    page.click('Map');
    page.loadPage('/map');
    page.validateMap();
    
   });
  

});
