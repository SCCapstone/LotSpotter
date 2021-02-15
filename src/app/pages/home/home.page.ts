import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication-service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  logo: String;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
  
  ) {}

  ngOnInit() {
    this.logo = "../assets/images/USC_logo.png";
  }

  avaliableLotsNav() {
    this.router.navigate(['available-lots']);
  }

  allLotsNav() {
    this.router.navigate(['all-lots']);
  }

  managePassesNav() {
    this.router.navigate(['manage-passes']);
  }

  purchaseAPassNav() {
    this.router.navigate(['purchase-a-pass-select']);
  }

  settingsNav() {
    this.router.navigate(['settings']);
  }

  mapNav() {
    this.router.navigate(['map']);
  }

  analyticsNav() {
    this.router.navigate(['analytics']);
  }

  favoritesNav() {
    this.router.navigate(['favorites']);
  }
  SignOff(){
    this.authService.SignOut();
  }

}
