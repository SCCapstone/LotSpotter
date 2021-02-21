import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication-service";
import firebase from 'firebase';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  user={
    email:"",
    password:"",
    usertype:""
  }

  private database = firebase.firestore();

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    private backend: BackendService
  ) { }

  ngOnInit() {}

   signUp(email, password){
    this.authService.RegisterUser(email.value, password.value)
    .then((res) => {
      // Do something here
      this.authService.SendVerificationMail()
      this.router.navigate(['verify']);
    }).catch((error) => {
      window.alert(error.message)
    })
  }

}