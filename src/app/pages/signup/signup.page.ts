import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication-service";

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

  constructor(
    public authService: AuthenticationService,
    public router: Router
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