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

   it('The app should allow a user to navigate to the map page, and it should load correctly', () => {
     page.login('test@test.com', 'testtest')
     page.loadPage('/home');
     page.click('Map');
     page.loadPage('/map');
     page.validateMap();
    
    });
  

 });

describe('Navigation', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    browser.get("/")
    page.login('test@test.com', 'testtest')
  })

  beforeEach(() => {
    page = new AppPage();
    browser.get("/home")
  });

 

  it("The app should allow a user to navigate to the 'All Lots' page", () => {
    page.loadPage('/home');
    page.clickLots();
    page.loadPage('/all-lots');
    page.validateAllLots();
    
   });

   it("The app should allow a user to navigate to the 'Available Lots' page", () => {
    page.loadPage('/home');
    page.clickAvailable();
    page.loadPage('/available-lots');
    page.validateAvailable();
    
   }); 

   it("The app should allow a user to navigate to the 'Favorites' page", () => {
    page.loadPage('/home');
    page.clickAvailable();
    page.loadPage('/favorites');
    page.validateFavorites();
    
   }); 

   it("The app should allow a user to navigate to the 'Manage Passes' page", () => {
    page.loadPage('/home');
    page.clickAvailable();
    page.loadPage('/manage-passes');
    page.validateManage();
    
   }); 

   it("The app should allow a user to navigate to the 'Purchase A Pass' page", () => {
    page.loadPage('/home');
    page.clickPurchase();
    page.loadPage('/purchase-a-pass');
    page.validatePurchase();
    
   });

   it("The app should allow a user to navigate to the 'Settings' page", () => {
    page.loadPage('/home');
    page.clickSettings();
    page.loadPage('/settings');
    page.validateSettings();
    
   });

   it("The app should allow a user to navigate using the side-menu", () => {
    page.loadPage('/home');
    page.sideMenuValidation();
    
   });
   
   
 


  
/*
});

 describe('Create and Delete a User Account', () => {
   let page: AppPage;

   beforeAll(() => {
     page = new AppPage();
     browser.get("/");
   });
   it('The app should launch to the login screen and navigate to user sign up' , () => {
     page.loadPage('/signup');
     page.signup('deluser@del.com', 'thisusergone')
      page.loadPage('/signup');
   });
   it('The app should login with the new account and navigate to the settings page', () => {
     page.login('deluser@del.com', 'thisusergone')
     page.loadPage('/home')
    page.loadPage('/settings')
     page.validateSettings();
   });
   it('The app should delete the current user account and confirm the delete account popup', () => {
     page.clickDeleteUserAccount()
     page.confirmAlert()
     page.loadPage("/")
   });
   it('The app should attempt to login with deleted account and confirm error popup',() =>{
     page.login('deluser@del.com', 'thisusergone')
     page.confirmLoginError();
   });

 });
*/