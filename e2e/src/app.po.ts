import { browser, by, element } from 'protractor';

export class AppPage {

   emailEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/ion-item[1]/ion-input/input'));
   passwordEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/ion-item[2]/ion-input/input'));
   loginEl = element(by.xpath("//*[contains(text(),'Login')]"));
   signupEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/ion-row[2]/ion-col/ion-button'));
   newemailEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-signup/ion-content/form/ion-item[1]/ion-input'));
   newpassEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-signup/ion-content/form/ion-item[2]/ion-input'));
   createEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-signup/ion-content/form/ion-row/ion-col/ion-button'));
   logOutEl = element(by.className('md button button-block button-solid ion-activatable ion-focusable hydrated'));
  navigateTo() {
    return browser.get('/');
  }

  refresh() {
    return browser.refresh();
  }
  loadPage(url) {
     browser.get(url);
  }
  async grabNewElements(){
    let url = browser.getCurrentUrl();
    //browser.get(url);
  }

  login(email, password) {
    browser.waitForAngularEnabled(false)
      this.emailEl.clear().then(() => {
      this.emailEl.sendKeys(email)
         })
      this.passwordEl.clear().then(() => {
      this.passwordEl.sendKeys(password)
             })   
      this.loginEl.click()       
  }

  signup(email, password) {
    // this.signupEl.click()
    this.newemailEl.clear().then(() => {
      this.newemailEl.sendKeys(email)
    })
    this.newpassEl.clear().then(() => {
      this.newpassEl.sendKeys(password)
    })
    this.createEl.click()
    // this.login(email, password)
  }

  logout() {
    this.logOutEl.click()
  }

  click(elementText) {
    element.all(by.xpath("//*[contains(text()," + elementText + ")]")).first().click();
  }

  clickLots() {
    element(by.xpath("//*[contains(text(), 'All Lots')]")).click();
  }

  clickAvailable() {
    element(by.xpath("//*[contains(text(), 'Available Lots')]")).click();
  }

  clickPurchase() {
    element(by.xpath("//*[contains(text(), 'Purchase A Pass')]")).click();
  }

  clickSettings() {
    element.all(by.xpath("//*[contains(text(), 'Settings')]")).first().click();
  }
  clickDeleteUserAccount() {
    element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-settings/ion-content/ion-button[3]')).click();
  }
  clickTesting() {
    element(by.xpath("//*[contains(text(), 'Testing UI')]")).click();
  }
  addCarToALot() {
    this.grabNewElements();
    element(by.xpath("//*[contains(@class, 'select')]")).click();
    browser.sleep(2000);
    element(by.xpath("//div[contains(text(), 'AD3')]")).click();
    browser.sleep(2000);
    element(by.xpath("//*[contains(text(), 'OK')]")).click();
    browser.sleep(2000);
    this.grabNewElements();
    element.all(by.xpath("//ion-radio")).first().click();
    element(by.xpath("/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-testing-ui/ion-content/form/ion-item[2]/ion-input/input")).sendKeys("1")
         browser.sleep(2000);
    element(by.xpath("//*[text() ='Submit Changes']")).click();
  }


  confirmAlert() {
    element(by.xpath('/html/body/app-root/ion-app/ion-alert/div[2]/div[3]/button[2]')).click();
  }

  confirmLoginError() {
    element(by.xpath('//*[@id="alert-5-msg"]'))
  }

  validateMap() {
    var elem = element(by.xpath("//agm-map"));
    browser.waitForAngularEnabled(false)
    browser.driver.wait(function() {
      return elem.isDisplayed().then(function(IsVisible) {
          return IsVisible;
      });
  }, 10000);
  }

  validateAllLots() {
    var elem = element(by.xpath("//ion-label[text() = 'AD3']"));
    browser.waitForAngularEnabled(false)
    expect(elem.innerText = 'AD3');

  }

  validateAvailable() {
    var elem = element(by.xpath("//ion-title[text() = 'Available Lots']"));
    browser.waitForAngularEnabled(false)
    expect(elem.innerText = 'Available Lots');

  }

  validateFavorites() {
    var elem = element(by.xpath("//ion-title[text() = 'Favorites']"));
    browser.waitForAngularEnabled(false)
    expect(elem.innerText = 'Favorites');

  }

  validateManage() {
    var elem = element(by.xpath("//ion-title[text() = 'Manage Passes']"));
    browser.waitForAngularEnabled(false)
    expect(elem.innerText = 'Manage Passes');

  }

  validatePurchase() {
    var elem = element(by.xpath("//ion-title[text() = 'Purchase A Pass']"));
    browser.waitForAngularEnabled(false)
    expect(elem.innerText = 'Select Garage/Lot');

  }

  validateSettings() {
    var elem = element(by.xpath("//ion-title[text() = 'Settings']"));
    browser.waitForAngularEnabled(false)
    expect(elem.innerText = 'Settings');

  }

  sideMenuValidation() {
    var elems = element.all(by.xpath("//ion-menu-toggle"));
    browser.waitForAngularEnabled(false)
    expect(elems.count()).toBe(8);
    
    
  }

  getNumberSpaces() {
    browser.waitForAngularEnabled(false)
    var numberSpacesString = element.all(by.xpath("//ion-text[contains(text(), 'Spaces Open')]"))[0]
    this.clickSettings();
    this.loadPage('/settings');
    this.clickTesting();
    this.addCarToALot();
    this.loadPage('/home')
    this.clickLots();
    this.loadPage('/all-lots');
    var newNumberSpacesString = element.all(by.xpath("//ion-text[contains(text(), 'Spaces Open')]"))[0]
    expect(numberSpacesString != newNumberSpacesString)
    }
      
    
    
  }
