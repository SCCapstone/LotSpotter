import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase';
import { Lot } from '../../interfaces';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

import { LocationService } from '../../services/location.service'; 
@Component({
  selector: 'app-purchase-a-pass-payment',
  templateUrl: './purchase-a-pass-payment.page.html',
  styleUrls: ['./purchase-a-pass-payment.page.scss'],
})
export class PurchaseAPassPaymentPage implements OnInit {

  payment_information: FormGroup;
  private card_info = {
    name_on_card: "...",
    card_number: "...",
    expiration_date: "...",
    cvv: "...",
    zip_code: "...",
  }; 
  constructor(private router: Router, 
    public formBuilder:FormBuilder,
    private route:ActivatedRoute) { 
      this.payment_information = formBuilder.group({
        name_on_card:['', Validators.required],
        card_number:['',Validators.required],
        expiration_date:['', Validators.required],
        cvv:['', Validators.required],
        zip_code: ['',Validators.required]
      });
   
  }

  purchase: any;
  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.purchase = param
        console.log(this.purchase.garage_name);
      });
  }

  async goToReview(value){
    console.log(value)
    console.log(value.name_on_card)
    // this.purchase.card_name = value.name_on_card;
    // this.purchase.card_number = value.card_number;
    // this.purchase.exp_date = value.expiration_date;
    // this.purchase.cvv = value.cvv;
    // this.purchase.zip_code = value.card_zip_code;

    this.router.navigate(['purchase-a-pass-review', this.purchase]);
    
  }

  

}
