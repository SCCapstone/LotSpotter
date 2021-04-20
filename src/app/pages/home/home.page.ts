import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication-service";
import {AngularFireAuth} from '@angular/fire/auth';
import { serializeNodes } from '@angular/compiler/src/i18n/digest';
import { BackendService } from 'src/app/services/backend.service';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  logo: String;
  private loginState:boolean;

  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public afAuth: AngularFireAuth,
    public backend: BackendService,
    private auth: AuthenticationService,
    public nativeStorage: NativeStorage
  ) {
    this.auth.getLoginState().subscribe(value => {
      this.loginState = value;
    });
  }

  ngOnInit() {
    this.logo = "../assets/images/USC_logo.png";
    if(this.loginState) {
      this.backend.setFavorites();
    }
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
  signOut(){
   var self = this;
   this.afAuth.signOut().then( function() { 
     console.log("logged out")
     self.authService.setLoginState(false);
     self.router.navigate(["/login"]);
     self.nativeStorage.clear()
   });
  }
  signIn(){
    this.router.navigate(['/login']);
  }

}
