import { browser, by, element } from 'protractor';

export class AppPage {

   emailEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/ion-item[1]/ion-input/input'));
   passwordEl = element(by.xpath('/html/body/app-root/ion-app/ion-split-pane/ion-router-outlet/app-login/ion-content/ion-item[2]/ion-input/input'));
   loginEl = element(by.xpath("//*[contains(text(),'Login')]"));
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
      this.emailEl.clear().then(() => {
      this.emailEl.sendKeys(email)
         })
      this.passwordEl.clear().then(() => {
      this.passwordEl.sendKeys(password)
             })   
      this.loginEl.click()       
  }

  logout() {
    this.logOutEl.click()
  }

  click(elementText) {
    element(by.xpath("//*[contains(text()," + elementText + ")]")).click();
  }

  validateMap() {
    var elem = element(by.xpath("//agm-map"));
  }

}