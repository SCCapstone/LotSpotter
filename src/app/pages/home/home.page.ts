import { Component, OnInit } from '@angular/core';
import { LoginPageModule } from '../login/login.module';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  logo: String;

  constructor(
    public router: Router
  
  ) {}

  ngOnInit() {
    this.logo = "../assets/images/USC_logo.png";
  }

  avaliableLotsNav() {
    this.router.navigate(['avaliable-lots']);
  }

  allLotsNav() {
    this.router.navigate(['all-lots']);
  }

  managePassesNav() {
    this.router.navigate(['manage-passes']);
  }

  purchaseAPassNav() {
    this.router.navigate(['purchase-a-pass']);
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

}
