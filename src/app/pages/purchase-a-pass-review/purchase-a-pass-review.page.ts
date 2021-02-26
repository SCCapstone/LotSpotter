import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase';
import { Purchase } from '../../interfaces';
import { Pass } from '../../interfaces';
import { Router, ActivatedRoute, ParamMap, NavigationExtras } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { DatePipe, formatDate } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { LocationService } from '../../services/location.service'; 
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


  private permitDetails:Pass = {
    type: "",
    garage_name: "",
    expire: new Date()
  };

  purchase = {} as any;
  constructor(private router: Router, 
    public formBuilder:FormBuilder,
    private route:ActivatedRoute,
    private backend:BackendService,
    public alertController:AlertController,
    private auth: AuthenticationService) { 
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
    this.backend.setPermits()
  }

  setPermitDetails(){
    
  }
  async submitPurchase(){

    // May come back later an add the purchase docID as a permit detail
    this.backend.newPurchase(this.purchase);

    
    // Get permit details to add to user's list of permits
    this.permitDetails.type = this.purchase.pass_type;
    this.permitDetails.garage_name = this.purchase.garage_name;

    // Calculate date the permit would expire by determining if a date is
    // between January 1 and August 1 (spring and summer semester) or
    // between August 2 and December 31 (fall and winter semester)
    
    if(this.currentDate >= this.springStart && this.currentDate < this.fallStart){
      this.permitDetails.expire = this.springEnd;
    
    }
    else if (this.currentDate >= this.fallStart && this.currentDate < this.springStart) {
      this.permitDetails.expire = this.fallEnd;
    } 

    this.backend.updatePermits(this.permitDetails);

    // Display purchase successful
    const alert = await this.alertController.create({
      message: 'Purchase Successful',
      buttons: ['OK']
    });

    await alert.present();
    let result = await alert.onDidDismiss();

    this.router.navigate(['home']);

  }
}
