import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import firebase from 'firebase';
import { Lot, Purchase } from '../../interfaces';
import { Router, ActivatedRoute, NavigationExtras,ParamMap } from '@angular/router';

import { LocationService } from '../../services/location.service';
import { type } from 'os';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication-service';

// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-a-pass-select',
  templateUrl: './purchase-a-pass-select.page.html',
  styleUrls: ['./purchase-a-pass-select.page.scss'],
})
export class PurchaseAPassSelectPage implements OnInit {

  // Add a variable to the purchase object that connects it to the user 

  private database = firebase.firestore();
  private lots:Lot[] = [];
  private loginState:boolean;
  private set_garage_name = '';
 
  purchase:Purchase = {
    pass_type: '',
    garage_name: '',
    shipping_name: '',
    street_address: '',
    apt_number: '',
    shipping_zip_code: '',
    city: '',
    state: '',
    country: '',
    pick_up_pass: false,
    card_name: '',
    card_number: '',
    exp_date: '',
    cvv: '',
    card_zip_code: '',
  };
  // purchase = {} as any;
  constructor( 
    private locServ: LocationService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastController,
    private auth: AuthenticationService,
    
  ) {
      if(this.route.snapshot.paramMap.get('purchase')!= null){
        this.purchase = JSON.parse(this.route.snapshot.paramMap.get('purchase'));
        console.log(this.purchase)
      }
  
      this.auth.getLoginState().subscribe(value => {
        this.loginState = value;
      });
  }

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    var self = this;
    this.database.collection('lots').onSnapshot(function(querySnapshot) {
      self.lots = [];
      querySnapshot.forEach(function(doc) {
        let a = doc.data();
        let lot:Lot = { name: a.name,
                addr: a.addr,
                currCap: a.currCap,
                maxCap: a.maxCap,
                desc: a.desc,
                loc: a.loc,
                lotType: a.lotType,
                id: doc.id,
        }
        self.lots.push(lot);
      });
    });
  }

  garage_name($event){
    console.log($event.detail.value);
    this.set_garage_name = $event.detail.value;
    console.log(this.set_garage_name)
  }

  garagePaymentRoute(){

    if (!this.loginState) {
      this.showToast("middle");
      return;
    }

    this.purchase.pass_type = "Garage";

    if(this.set_garage_name != null){
      this.purchase.garage_name = this.set_garage_name; 
    }

    this.router.navigate(['purchase-a-pass-shipping', {purchase:JSON.stringify(this.purchase)}]);
  }
  
  lotPaymentRoute() {
   
    if (!this.loginState) {
      this.showToast("middle");
      return;
    }
    
    this.purchase.pass_type = "Lot";

    this.router.navigate(['purchase-a-pass-shipping', {purchase:JSON.stringify(this.purchase)}]);
  }


  async showToast(position: any) {
    const toast = await this.toast.create({
      message: 'Please log in to add permits.',
      duration: 1000,
      position,
      cssClass: 'toast-1-css',
    });
    toast.present();
  }
}
