import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication-service";
import { browser, by, element } from 'protractor';
import { User } from '../../interfaces';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logo: String;

  private currUser:User = {
    email: "",
    favorites: [],
    permits: [],
    uid: "",
  };

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
      this.currUser.email = this.authService.userData.email;
      this.currUser.uid = this.authService.userData.uid;
      console.log("current user: "+this.currUser.email);
  }

  signupNav() {
    this.router.navigate(['signup']);
  }

  forgotPassword() {
    
  }

}