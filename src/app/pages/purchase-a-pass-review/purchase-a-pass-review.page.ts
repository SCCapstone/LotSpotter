import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase';
import { Purchase } from '../../interfaces';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { formatDate } from '@angular/common';

import { LocationService } from '../../services/location.service'; 
@Component({
  selector: 'app-purchase-a-pass-review',
  templateUrl: './purchase-a-pass-review.page.html',
  styleUrls: ['./purchase-a-pass-review.page.scss'],
})
export class PurchaseAPassReviewPage implements OnInit {

  private currentPurchase:Purchase = {
    pass_type: "",
    garage_name: "",
    shipping_name: "",
    street_address: "",
    apt_number: "",
    shipping_zip_code: "",
    city: "",
    state: "",
    country: "",
    pick_up_pass: false,
    card_name: "",
    card_number: "",
    exp_date: "",
    cvv: "",
    card_zip_code: ""
  }; 

  purchase = {} as any;
  constructor(private router: Router, 
    public formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private backend:BackendService) { 
      this.route.queryParams.subscribe(params => {
        this.purchase = JSON.parse(params["purchase"]);
    });
   
  }

  // Maybe edit all of the purchase stuff to be an interface rather than an object

  // private currentPurchase:Purchase = {
  //   pass_type: this.purchase.pass_,
  //   garage_name: "",
  //   shipping_name: "",
  //   street_address: "",
  //   apt_number: "",
  //   shipping_zip_code: "",
  //   city: "",
  //   state: "",
  //   country: "",
  //   pick_up_pass: false,
  //   card_name: "",
  //   card_number: "",
  //   exp_date: "",
  //   cvv: "",
  //   card_zip_code: ""
  // }; 
  
  ngOnInit() {
  
  }

  submitPurchase(){



    this.backend.newPurchase(this.purchase);


  }
}
