import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication-service";
import { browser, by, element } from 'protractor';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logo: String;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private backend: BackendService
  ) { }

  ngOnInit() {
    this.logo = "../../../assets/uofscbanner_red.png";
  }

  logIn(email, password) {
    console.log("Login with "+email.value);

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
      console.log("Current user: "+this.authService.userData.email);
      console.log("Current Uid: "+this.authService.userData.uid);
  }

  signupNav() {
    this.router.navigate(['signup']);
  }

  forgotPassword() {
    
  }

}