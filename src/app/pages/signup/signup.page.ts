import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication-service";
import { User } from '../../interfaces';
import firebase from 'firebase';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  private currUser:User = {
    email: "",
    favorites: [],
    permits: [],
    uid: "",
  };

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
    
    let newUser = {
        email: this.authService.userData.email,
        favorites: this.currUser.favorites,
        permits: this.currUser.permits,
        uid: this.authService.userData.uid
    }
    this.backend.addUser(newUser);
  }

}