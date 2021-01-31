import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication-service";
import { browser, by, element } from 'protractor';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logo: String;

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) { }

  ngOnInit() {
    this.logo = "../../../assets/uofscbanner_red.png";
  }

  logIn(email, password) {
    this.authService.SignIn(email.value, password.value)
      .then((res) => {
        if(this.authService.isEmailVerified) {
          this.router.navigate(['home']);          
        } else {
          window.alert('Email is not verified')
          return false;
        }
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  signupNav() {
    this.router.navigate(['signup']);
  }

  // For Behavior Testing
  
  // navigateTo() {
  //   return browser.get('/');
  // }

  // getPageTitle() {
  //   // return element(by.css())
  // }


}