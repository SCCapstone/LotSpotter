import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import firebase from 'firebase';
import { Lot, Purchase } from '../../interfaces';
import { Router, ActivatedRoute, NavigationExtras,ParamMap } from '@angular/router';

import { LocationService } from '../../services/location.service';
import { type } from 'os';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { AlertController } from '@ionic/angular';


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

  private currentDate = new Date();
  private year = this.currentDate.getFullYear();

  private springStart = new Date(this.year, 0, 1);
  private springEnd = new Date(this.year, 7, 1);
  private fallStart = new Date(this.year, 7, 2);
  private fallEnd = new Date(this.year, 11, 31);

  private garages = ["Sumter Street Garage", "Hampton Garage", "Close-Hipp Garage", "Senate Street Garage", "Bull Street Garage", "Pendleton Street Garage", "Blossom Street Garage", "Athletic Village Garage"];
 
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
  // purchase = {} as any;
  constructor( 
    private locServ: LocationService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastController,
    private auth: AuthenticationService,
    private alertController: AlertController
    
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

  async garagePaymentRoute(){

    console.log(this.set_garage_name)

    if (!this.loginState) {
      this.showToast("middle");
      return;
    }

    this.purchase.pass_type = "Garage";
    this.purchase.garage_name = this.set_garage_name;

    if(this.currentDate >= this.springStart && this.currentDate < this.fallStart){
      const alert = await this.alertController.create({
        header: 'Which semesters would you like your pass to be valid for?',
        message: 'If purchasing the pass during the fall semester, you can choose to purchase for both fall and spring. If purchasing the pass during the spring semester, you may only purchase for spring semester.',
        inputs: [
          {
            name: 'Spring',
            type: 'checkbox',
            label: 'Spring',
            value: 'value1',
            checked: false
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            // cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (alertData) => {
              if(alertData.length == 1){
                this.purchase.semesters = ["Spring"];
                this.router.navigate(['purchase-a-pass-shipping', {purchase:JSON.stringify(this.purchase)}]);
              }
              else if(alertData.length == 0){
                this.showToast2("middle");
              }
            }
          }
        ]
      });

      await alert.present();
    
    }
    else if (this.currentDate >= this.fallStart && this.currentDate < this.springStart) {
      const alert = await this.alertController.create({
        header: 'Which semesters would you like your pass to be valid for?',
        message: 'If purchasing the pass during the fall semester, you can choose to purchase for both fall and spring. If purchasing the pass during the spring semester, you may only purchase for spring semester.',
        inputs: [
          {
            name: 'Fall',
            type: 'checkbox',
            label: 'Fall',
            value: 'value1',
            checked: false
          },
          {
            name: 'Spring',
            type: 'checkbox',
            label: 'Spring',
            value: 'value2',
            checked: false
          }
        ],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            // cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: (alertData) => {
              if(alertData.length == 2){
                this.purchase.semesters = ["Fall", "Spring"];
                this.router.navigate(['purchase-a-pass-shipping', {purchase:JSON.stringify(this.purchase)}]);
              }
              else if(alertData.length == 1){
                if(alertData[0] == "value1"){
                  this.purchase.semesters = ["Fall"];
                }
                else if(alertData[0] == "value2"){
                  this.purchase.semesters = ["Spring"];
                }
                this.router.navigate(['purchase-a-pass-shipping', {purchase:JSON.stringify(this.purchase)}]);
              }
              else if(alertData.length == 0){
                this.showToast2("middle");
              }
            }
          }
        ]
      });

      await alert.present();
    }


    // this.router.navigate(['purchase-a-pass-shipping', {purchase:JSON.stringify(this.purchase)}]);
  }
  
  async lotPaymentRoute() {
   
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

  async showToast2(position: any){
    const toast = await this.toast.create({
      message: 'Please select at least one semester.',
      duration: 1000,
      position,
      cssClass: 'toast-1-css',
    });
    toast.present();
  }
}
