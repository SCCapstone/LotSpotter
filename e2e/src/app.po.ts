import { browser, by, element } from 'protractor';

export class AppPage {

  emailEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/ion-item[1]/ion-input/input'));
  passwordEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/ion-item[2]/ion-input/input'));
  loginEl = element(by.xpath("//*[contains(text(),'Login')]"));

  signupEl = element(by.xpath("//*[contains(text(),'Signup')]"));
  newemailEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-signup/ion-content/form/ion-item[1]/ion-input/input'));
  newpassEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-signup/ion-content/form/ion-item[2]/ion-input/input'));
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
  async grabNewElements() {
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
    browser.waitForAngularEnabled(false)
    // this.signupEl.click()
    // this.loadPage('/signup') 
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

  clickFavorites() {
    element.all(by.xpath("//*[contains(text(), 'Favorites')]")).first().click();
  }

  clickSignup() {
    element.all(by.xpath("//*[contains(text(), 'Signup')]")).first().click();
  }

  clickManage() {
    element.all(by.xpath("//*[contains(text(), 'Manage Passes')]")).first().click();
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

  clickTesting() {
    element(by.xpath("//*[contains(text(), 'Testing UI')]")).click();
  }

  clickDeleteUserAccount() {
    element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-settings/ion-content/ion-button[3]')).click();
  }

  confirmLoginError() {
    element(by.xpath('//*[@id="alert-5-msg"]'))
  }

  confirmPurchase() {
    element(by.xpath('//*[@id="alert-6-msg"]'))
  }

  clickPurchasePass() {
    element(by.xpath("//*[contains(text(), 'Purchase Lot Pass')]")).click();
  }

  clickReviewOrder() {
    element(by.xpath("//*[contains(text(), 'Review Order')]")).click()
  }
  clickSubmitOrder() {
    element(by.xpath("//*[contains(text(), 'Submit Order')]")).click();
  }

  openTimesheetScroll() {
    return element(by.css('mbsc-time input')).click();
  }
  getTimesheetScrollModal() {
    return element(by.css('.mbsc-fr')).isDisplayed();
  }

  validatePurchaseSuccess() {
    var purchaseEL = element(by.xpath('//*[@id="alert-12-msg"]'));
    browser.waitForAngularEnabled(false);
    browser.driver.wait(function () {
      return purchaseEL.isDisplayed().then(function (IsVisible) {
        return IsVisible;
      });
    }, 10000)
  }

  validateAlert() {
    var alertelm = element(by.xpath('/html/body/app-root/ion-app/ion-alert'));
    browser.waitForAngularEnabled(false);
    browser.driver.wait(function () {
      return alertelm.isDisplayed().then(function (IsVisible) {
        return IsVisible;
      });
    }, 10000)
  }
  validateShipping() {
    var elem = element(by.xpath("//ion-title[text() = 'Shipping Information']"));
    browser.waitForAngularEnabled(false)
    expect(elem.innerText = 'Shipping Information');
  }
  validatePayment() {
    var elem = element(by.xpath("//ion-title[text() = 'Payment Information']"));
    browser.waitForAngularEnabled(false)
    expect(elem.innerText = 'Payment Information');
  }
  validateOrder() {
    var elem = element(by.xpath("//ion-title[text() = 'Review Your Order']"));
    browser.waitForAngularEnabled(false)
    expect(elem.innerText = 'Review Your Order');
  }

  fillPayment(name, card, cvv, zip) {
    var nameEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-purchase-a-pass-payment/ion-content/form/ion-item[1]/ion-input/input'));
    var cardEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-purchase-a-pass-payment/ion-content/form/ion-item[2]/ion-input/input'));

    // var expEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-purchase-a-pass-payment/ion-content/form/ion-item[3]/ion-datetime'));
    // var expEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-purchase-a-pass-payment/ion-content/form/ion-item[3]/ion-datetime//button'));
    var expEl = element(by.className('ng-untouched ng-pristine ng-invalid ion-untouched ion-pristine ion-invalid md in-item hydrated'))
    // var monthEl = element(by.xpath('/html/body/app-root/ion-app/ion-picker/div[2]/div[2]/ion-picker-column[1]/div/button[4]'));
    // var yearEl = element(by.xpath('/html/body/app-root/ion-app/ion-picker/div[2]/div[2]/ion-picker-column[2]/div/button[1]'));
    var monthEl = element(by.xpath("//*[contains(text(),'April')]"));
    var yearEl = element(by.xpath("//*[contains(text(),'2025')]"));
    var doneEl = element(by.xpath('/html/body/app-root/ion-app/ion-picker/div[2]/div[1]/div[2]/button'));
    // var doneEl = element(by.className('picker-toolbar-button sc-ion-picker-md'))
    var cvvEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-purchase-a-pass-payment/ion-content/form/ion-item[4]/ion-input/input'));
    var zipEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-purchase-a-pass-payment/ion-content/form/ion-item[5]/ion-input/input'));

    nameEl.clear().then(() => {
      nameEl.sendKeys(name)
    });
    cardEl.clear().then(() => {
      cardEl.sendKeys(card)
    });

    expEl.click();
    
    // monthEl.click();
    // yearEl.click();
    doneEl.click();

    cvvEl.clear().then(() => {
      cvvEl.sendKeys(cvv)
    });
    zipEl.clear().then(() => {
      zipEl.sendKeys(zip)
    });

    this.clickReviewOrder();

  }

  fillShipping(name, addr, aprt, city, state, country, zip) {
    var nameEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-purchase-a-pass-shipping/ion-content/form/ion-item[1]/ion-input/input'));
    var addrEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-purchase-a-pass-shipping/ion-content/form/ion-item[2]/ion-input/input'));
    var aprtEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-purchase-a-pass-shipping/ion-content/form/ion-item[3]/ion-input/input'));
    var cityEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-purchase-a-pass-shipping/ion-content/form/ion-item[4]/ion-input/input'));
    var stateEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-purchase-a-pass-shipping/ion-content/form/ion-item[5]/ion-input/input'));
    var countryEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-purchase-a-pass-shipping/ion-content/form/ion-item[6]/ion-input/input'));
    var zipEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-purchase-a-pass-shipping/ion-content/form/ion-item[7]/ion-input/input'));
    nameEl.clear().then(() => {
      nameEl.sendKeys(name)
    });
    addrEl.clear().then(() => {
      addrEl.sendKeys(addr)
    });
    aprtEl.clear().then(() => {
      aprtEl.sendKeys(aprt)
    })
    cityEl.clear().then(() => {
      cityEl.sendKeys(city)
    })
    stateEl.clear().then(() => {
      stateEl.sendKeys(state)
    })
    countryEl.clear().then(() => {
      countryEl.sendKeys(country)
    })
    zipEl.clear().then(() => {
      zipEl.sendKeys(zip)
    });

    element(by.xpath("//*[contains(text(), 'Continue to Payment')]")).click();

  }
  validateMap() {
    var elem = element(by.xpath("//agm-map"));
    browser.waitForAngularEnabled(false)
    browser.driver.wait(function () {
      return elem.isDisplayed().then(function (IsVisible) {
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

  addCarToALot() {
    this.grabNewElements();
    element(by.xpath("//*[contains(@class, 'select')]")).click();
    browser.sleep(1000);
    element(by.xpath("//div[contains(text(), 'AD3')]")).click();
    browser.sleep(1000);
    element(by.xpath("//*[contains(text(), 'OK')]")).click();
    browser.sleep(1000);
    this.grabNewElements();
    element.all(by.xpath("//ion-radio")).first().click();
    element(by.xpath("/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-testing-ui/ion-content/form/ion-item[2]/ion-input/input")).sendKeys("1")
         browser.sleep(1000);
    element(by.xpath("//*[text() ='Submit Changes']")).click();
  }




  getNumberSpaces() {
    browser.waitForAngularEnabled(false)
    var numberSpacesString = element.all(by.xpath("//ion-text[contains(text(), 'Spaces Open')]")).first()
    this.clickSettings();
    this.loadPage('/settings');
    this.clickTesting();
    this.addCarToALot();
    this.loadPage('/home')
    this.clickLots();
    this.loadPage('/all-lots');
    var newNumberSpacesString = element.all(by.xpath("//ion-text[contains(text(), 'Spaces Open')]")).first()
    expect(numberSpacesString != newNumberSpacesString)
    }



}