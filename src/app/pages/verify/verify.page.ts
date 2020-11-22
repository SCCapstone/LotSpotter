import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../services/authentication-service";

@Component({
  selector: 'app-verify',
  templateUrl: './verify.page.html',
  styleUrls: ['./verify.page.scss'],
})
export class VerifyPage implements OnInit {

  constructor(
    public authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

}
