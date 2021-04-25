import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase';
import { Purchase } from '../../interfaces';
import { Pass } from '../../interfaces';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { DatePipe, formatDate } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { AuthenticationService } from '../../services/authentication-service';

@Component({
  selector: 'app-purchase-a-pass-review',
  templateUrl: './purchase-a-pass-review.page.html',
  styleUrls: ['./purchase-a-pass-review.page.scss'],
})
export class PurchaseAPassReviewPage implements OnInit {

 
  private currentDate = new Date();
  private year = this.currentDate.getFullYear();

  private springStart = new Date(this.year, 0, 1);
  
  private springEnd = new Date(this.year, 7, 1);
  private fallStart = new Date(this.year, 7, 2);
  private fallEnd = new Date(this.year, 11, 31);

  private loginState: boolean;
  private db = firebase.firestore();

  private permitDetails:Pass = {
    type: "",
    garage_name: "",
    expire: new Date()
  };

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
  
  constructor(private router: Router, 
    public formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private backend:BackendService,
    public alertController:AlertController,
    private auth: AuthenticationService) {

      if(this.route.snapshot.paramMap.get('purchase')!= null){
        this.purchase = JSON.parse(this.route.snapshot.paramMap.get('purchase'));
        console.log(this.purchase)
      }

      /* Local Authentication Protection */
      this.auth.getLoginState().subscribe(value => {
        this.loginState = value;
      });
  }

  
  ngOnInit() {
    this.auth.setPermits()
  }

  async submitPurchase(){

    this.backend.newPurchase(this.purchase);

    // Get permit details to add to user's list of permits
    this.permitDetails.type = this.purchase.pass_type;
    this.permitDetails.garage_name = this.purchase.garage_name;

    // Calculate date the permit would expire by determining if a date is
    // between January 1 and August 1 (spring and summer semester) or
    // between August 2 and December 31 (fall and winter semester)
    
    // If the current date is during the spring/summer then the expiration date
    // is at the end of the summer semester
    if(this.currentDate >= this.springStart && this.currentDate < this.fallStart){
      this.permitDetails.expire = this.springEnd;
    
    }
    // If the current date is during the fall/winter, depending on the semesters chosen the 
    // expriation date is at the end of the fall or spring
    else if (this.currentDate >= this.fallStart && this.currentDate < this.springStart) {
      if(this.purchase.semesters.length == 1){
        if(this.purchase.semesters[0] == "Fall"){
          this.permitDetails.expire = this.fallEnd;
        }
        else if(this.purchase.semesters[0] == "Spring"){
          this.permitDetails.expire = this.springEnd;
        }
      }
      else if(this.purchase.semesters.length == 2){
        this.permitDetails.expire = this.springEnd;
      }
    } 

    this.auth.updatePermits(this.permitDetails);

    // console.log(this.permitDetails)

    // TODO: Fix this to use the permits in 'users', not 'pass'
    // For now though, this will be a quick fix.
    this.db.collection('pass').add({
      type:this.purchase.pass_type,
      garage_name:this.purchase.garage_name,
      expire: this.permitDetails.expire.toDateString(),
      uid: this.auth.userData.uid
    });

    // Display purchase successful
    const alert = await this.alertController.create({
      message: 'Purchase Successful',
      buttons: ['OK']
    });

    await alert.present();
    let result = await alert.onDidDismiss();

    this.router.navigate(['home']);

  }

// Routes the user and purchase information back to the select page 
async editLotType(){
  this.router.navigate(['purchase-a-pass-select', {purchase:JSON.stringify(this.purchase)}]);
}

// Routes the user and purchase information back to the shipping page 
async editShipping(){
  this.router.navigate(['purchase-a-pass-shipping', {purchase:JSON.stringify(this.purchase)}]);
}

// Routes the user and purchase information back to the payment page 
async editCard(){
  this.router.navigate(['purchase-a-pass-payment', {purchase:JSON.stringify(this.purchase)}]);
}

}
