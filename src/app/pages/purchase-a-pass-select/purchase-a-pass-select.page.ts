import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import firebase from 'firebase';
import { Lot } from '../../interfaces';
import { Router, ActivatedRoute, NavigationExtras,ParamMap } from '@angular/router';

import { LocationService } from '../../services/location.service';
import { type } from 'os';
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

  private set_garage_name = '';
 
  purchase = {
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
  }

  // purchase = {} as any;
  constructor( 
    private locServ: LocationService,
    private route: ActivatedRoute,
    private router: Router,
  ) 
  { 
    
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

    this.purchase.pass_type = "Garage";

    if(this.set_garage_name != null){
      this.purchase.garage_name = this.set_garage_name; 
    }

  

    let navigationExtras: NavigationExtras = {
      queryParams: {
          "purchase":JSON.stringify(this.purchase),
  
      }
    }
    this.router.navigate(['purchase-a-pass-shipping'], navigationExtras);
  }
  
  lotPaymentRoute() {
   

    this.purchase.pass_type = "Lot";

    let navigationExtras: NavigationExtras = {
      queryParams: {
          "purchase":JSON.stringify(this.purchase),
  
      }
    }
    this.router.navigate(['purchase-a-pass-shipping'], navigationExtras);
  }

}
