import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase';
import { Lot } from '../../interfaces';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { formatDate } from '@angular/common';

import { LocationService } from '../../services/location.service'; 
import { AuthenticationService } from 'src/app/services/authentication-service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-purchase-a-pass-payment',
  templateUrl: './purchase-a-pass-payment.page.html',
  styleUrls: ['./purchase-a-pass-payment.page.scss'],
})
export class PurchaseAPassPaymentPage implements OnInit {

  payment_information: FormGroup;
  purchase = {} as any;
  private loginState:boolean;

  constructor(private router: Router, 
    public formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private auth: AuthenticationService,
    private toast: ToastController ) { 

      this.route.queryParams.subscribe(params => {
        this.purchase = JSON.parse(params["purchase"]);
        console.log(this.purchase)
        console.log(typeof this.purchase)
      });

      this.payment_information = formBuilder.group({
        card_name:['', Validators.required],
        card_number:['',Validators.required],
        exp_date:['', Validators.required],
        cvv:['', Validators.required],
        card_zip_code: ['',Validators.required]
      });

      this.auth.getLoginState().subscribe(value => {
        this.loginState = value;
      });
   
  }

  ngOnInit() {
  }

  async goToReview(value) {

    console.log(value)
    console.log(value.name_on_card)
    // console.log(value.ex )
    var expiration_date = formatDate(value.exp_date,'MM/yyyy', 'en-US' )
    this.purchase.card_name = value.card_name;
    this.purchase.card_number = value.card_number;
    this.purchase.exp_date = expiration_date;
    this.purchase.cvv = value.cvv;
    this.purchase.card_zip_code = value.card_zip_code;

    let navigationExtras: NavigationExtras = {
      queryParams: {
          "purchase":JSON.stringify(this.purchase),
  
      }
    }
    this.router.navigate(['purchase-a-pass-review'], navigationExtras);
    
    
  }

  async showToast(position: any) {
    const toast = await this.toast.create({
      message: 'Please log in to purchase a parking pass.',
      duration: 1000,
      position,
      cssClass: 'toast-1-css',
    });
    toast.present();
  }

}
