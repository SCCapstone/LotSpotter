import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase';
import { Lot } from '../../interfaces';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { formatDate } from '@angular/common';
import { Purchase } from '../../interfaces';
import { LocationService } from '../../services/location.service'; 
import { AuthenticationService } from 'src/app/services/authentication-service';
import { ToastController } from '@ionic/angular';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { parse } from 'path';

@Component({
  selector: 'app-purchase-a-pass-payment',
  templateUrl: './purchase-a-pass-payment.page.html',
  styleUrls: ['./purchase-a-pass-payment.page.scss'],
})
export class PurchaseAPassPaymentPage implements OnInit {

  payment_information: FormGroup;
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
  private loginState:boolean;
  private card_exp;


  constructor(private router: Router, 
    public formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private auth: AuthenticationService,
    private toast: ToastController ) { 
    

      if(this.route.snapshot.paramMap.get('purchase')!= null){
        this.purchase = JSON.parse(this.route.snapshot.paramMap.get('purchase'));
        console.log(this.purchase)
      }

      // Date conversion so it is displayed if already set
      if(this.purchase.exp_date != ""){
        var date_split = this.purchase.exp_date.split("/");
        var month = parseInt(date_split[0]);
        var year = parseInt(date_split[1]);
        this.card_exp = new Date(year, month-1);
        this.card_exp = this.card_exp.toISOString();
      }
      else {
        this.card_exp = "";
      }

      this.payment_information = formBuilder.group({
        card_name:[this.purchase.card_name, Validators.required],
        card_number:[this.purchase.card_number,Validators.required],
        exp_date: [this.card_exp, Validators.required],
        cvv:[this.purchase.cvv, Validators.required],
        card_zip_code: [this.purchase.card_zip_code,Validators.required]
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
    
    this.router.navigate(['purchase-a-pass-review', {purchase:JSON.stringify(this.purchase)}]);
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
