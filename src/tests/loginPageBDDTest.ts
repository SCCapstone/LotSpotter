import { async, ComponentFixture } from '@angular/core/testing';
import { TestBed } from '@angular/core/testing';
import { LoginPage } from 'src/app/pages/login/login.page';

describe('Login', () => {
  let loginpage: LoginPage;

    it('displays the login screen', () => {
      expect(loginpage.ngOnInit()).toContain('../../../assets/uofscbanner_red.png');

    });

});