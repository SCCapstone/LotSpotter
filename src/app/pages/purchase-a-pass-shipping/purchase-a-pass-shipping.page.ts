import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase';
import { Lot, Purchase } from '../../interfaces';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

import { LocationService } from '../../services/location.service'; 

@Component({
  selector: 'app-purchase-a-pass-shipping',
  templateUrl: './purchase-a-pass-shipping.page.html',
  styleUrls: ['./purchase-a-pass-shipping.page.scss'],
})
export class PurchaseAPassShippingPage implements OnInit {

  shipping_information: FormGroup;
 
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

  constructor(private router: Router, 
    public formBuilder:FormBuilder,
    private route:ActivatedRoute) { 

      if(this.route.snapshot.paramMap.get('purchase')!= null){
        this.purchase = JSON.parse(this.route.snapshot.paramMap.get('purchase'));
        console.log(this.purchase)
      }
      this.shipping_information = formBuilder.group({
        shipping_name: [this.purchase.shipping_name],
        street_address: [this.purchase.street_address],
        apt_number: [this.purchase.apt_number],
        shipping_zip_code: [this.purchase.shipping_zip_code],
        city: [this.purchase.city],
        state: [this.purchase.state],
        country: [this.purchase.country],
        pick_up_pass: [this.purchase.pick_up_pass],
      });
   
  }

  ngOnInit() {
  }

  async goToPayment(value){

    console.log(value)
    console.log(value.name_on_card)
    this.purchase.shipping_name = value.shipping_name;
    this.purchase.street_address = value.street_address;
    this.purchase.apt_number = value.apt_number;
    this.purchase.shipping_zip_code = value.shipping_zip_code;
    this.purchase.state = value.state;
    this.purchase.country = value.country;
    this.purchase.pick_up_pass = value.pick_up_pass;
    this.purchase.city = value.city;


    
    this.router.navigate(['purchase-a-pass-payment', {purchase:JSON.stringify(this.purchase)}]);
  }

}
