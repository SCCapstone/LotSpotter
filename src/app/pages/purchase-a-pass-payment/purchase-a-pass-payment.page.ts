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
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { parse } from 'path';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-purchase-a-pass-payment',
  templateUrl: './purchase-a-pass-payment.page.html',
  styleUrls: ['./purchase-a-pass-payment.page.scss'],
})
export class PurchaseAPassPaymentPage implements OnInit {

  payment_information: FormGroup;
  purchase:Purchase = {
    pass_type: '',
    semesters: [],
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

  private today = new Date();
  private minDate = this.today.toISOString();
  private maxDate = (new Date(this.today.getFullYear() + 4 , this.today.getMonth())).toISOString();
 

  constructor(private router: Router, 
    public formBuilder:FormBuilder,
    public alertController:AlertController,
    private route:ActivatedRoute,
    private auth: AuthenticationService) { 
    
      
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
      /* Authenication Login Protection: a user not logged in should NOT 
         be able to purchase a pass. */
      this.auth.getLoginState().subscribe(value => {
        this.loginState = value;
      });
   
  }

  ngOnInit() {}

  // Takes payment information entered by user, checks the validity, and passes it and 
  // all other purchase information to the review page
  async goToReview(value) {
    // Check that expiration date has been filled out in form
    if(value.exp_date != ""){
      var expiration_date = formatDate(value.exp_date,'MM/yyyy', 'en-US' )
    }
    this.purchase.card_name = value.card_name;
    this.purchase.card_number = value.card_number;
    this.purchase.exp_date = expiration_date;
    this.purchase.cvv = value.cvv;
    this.purchase.card_zip_code = value.card_zip_code;

    // Check that all field values are filled
    if(this.purchase.card_name != "" && this.purchase.card_number != "" && this.purchase.exp_date != "" && this.purchase.cvv != "" && this.purchase.card_zip_code){

      // Valid Case 1: User inputs card as '1234 5678 9012 3456'
      // Length must be 19 numberic characters (including spaces)
      // CVV must be a three digit number 
      if(this.purchase.card_number.includes(' ')==true){
        
        if(this.purchase.card_number.length == 19){
          // Use / /g to replace all instances of " "
          var card_without_spaces = this.purchase.card_number.replace(/ /g, '');
          if(!isNaN(Number(card_without_spaces))){
            if(!isNaN(Number(this.purchase.cvv)) && (Number(this.purchase.cvv) >= 100 && Number(this.purchase.cvv) <= 999)){
              // console.log(Number(card_without_spaces))
              this.router.navigate(['purchase-a-pass-review', {purchase:JSON.stringify(this.purchase)}]);
            }
            else{
              const alert = await this.alertController.create({
                header:'Input Error',
                message: 'CVV is either incorrect length or contains alphabetic characters.',
                buttons: ['OK']
              });
  
              await alert.present();
              let result = await alert.onDidDismiss();
              // console.log(result)
            }
          }
          else{
            const alert = await this.alertController.create({
              header:'Input Error',
              message: 'Card Number cannot contain alphabetic characters.',
              buttons: ['OK']
            });

            await alert.present();
            let result = await alert.onDidDismiss();
            // console.log(result)
          }
        }
        else{
          const alert = await this.alertController.create({
            header:'Input Error',
            message: 'Improper number of digits in card number.',
            buttons: ['OK']
          });

          await alert.present();
          let result = await alert.onDidDismiss();
          // console.log(result)
        }
      }
      // Valid Case 2: User inputs card number as '1234567890123456'
      // Length must be 16 numeric characters
      // CVV must be three numeric characters
      else{
        if(this.purchase.card_number.length == 16 && !isNaN(Number(this.purchase.card_number))){
          if(!isNaN(Number(this.purchase.cvv)) && (Number(this.purchase.cvv) >= 100 && Number(this.purchase.cvv) <= 999)){
            this.router.navigate(['purchase-a-pass-review', {purchase:JSON.stringify(this.purchase)}]);
          }
          else{
            const alert = await this.alertController.create({
              header:'Input Error',
              message: 'CVV is either incorrect length or contains alphabetic characters.',
              buttons: ['OK']
            });

            await alert.present();
            let result = await alert.onDidDismiss();
            // console.log(result)
          }
        }
        else{
          const alert = await this.alertController.create({
            header:'Input Error',
            message: 'Card number contains either improper number of characters or included alphabetic characters.',
            buttons: ['OK']
          });

          await alert.present();
          let result = await alert.onDidDismiss();
          // console.log(result)
        }
      }
    }
    else{
      const alert = await this.alertController.create({
        header:'Input Error',
        message: 'Make sure that all fields are filled out.',
        buttons: ['OK']
      });

      await alert.present();
      let result = await alert.onDidDismiss();
    }
  } 
}
