import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase';
import { Lot, Stat } from '../../interfaces';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-testing-ui',
  templateUrl: './testing-ui.page.html',
  styleUrls: ['./testing-ui.page.scss'],
})
export class TestingUiPage implements OnInit {

  private currentLot:Lot = {
    name: "...",
    addr: "...",
    currCap: 0,
    maxCap: 0,
    desc: "...",
    loc: null,
    lotType: "...",
    id: "...",
  }; 
  private docID: string = "";
  edit_lot_form: FormGroup;
  new_capacity: any;
  private database = firebase.firestore();
  private lots:Lot[] = [];
  private converted_number_of_vehicles_2: any

  constructor(
    private formBuilder: FormBuilder,
    private backend: BackendService,
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController
  ) { 
    this.edit_lot_form = formBuilder.group({
      lot_name:['', Validators.required],
      operation:['',Validators.required],
      number_of_vehicles:['', Validators.required],
    })
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
        self.docID = doc.id;
        let lot:Lot = { name: a.name,
                addr: a.addr,
                currCap: a.currCap,
                maxCap: a.maxCap,
                desc: a.desc,
                loc: a.loc,
                lotType: a.lotType,
                id: doc.id,
        }
        // console.log(lot.id);
        self.lots.push(lot);
      });
    });
  }


  // I don't think this does anything, but apparently I wrote it -Cassidy
 
  // getLotInfo(name){
  //   this.backend.getLotData(name).then((res) => {
  //     this.currentLot = res; 
  //     // TODO: Call the image API request.
  //   }).catch((message) => {
  //     console.log("Could not get lot data.")
  //   });
  //   console.log("Viewing Lot: " + name);
  // }
  
  async updateLot(value){
    console.log(value)
    console.log(value.lot_name)
    let param:string = this.route.snapshot.paramMap.get("value.lot_name");
    console.log(param)
    await this.backend.getLotData(value.lot_name).then((res) => {
      this.currentLot = res; 
      // TODO: Call the image API request.
    }).catch((message) => {
      console.log("Could not get lot data.")
    });
    console.log("Viewing Lot: " + value.lot_name);
    
    var converted_number_of_vehicles = Number(value.number_of_vehicles)
    this.converted_number_of_vehicles_2 = converted_number_of_vehicles;
    var action = 0;
    if(value.operation == "add"){
      action = 1;
      this.new_capacity = this.currentLot.currCap + converted_number_of_vehicles;
      console.log(this.new_capacity);
    }
    else if(value.operation == "remove")
    {
      action = 0;
      this.new_capacity = this.currentLot.currCap - converted_number_of_vehicles;
      console.log(this.new_capacity);
    }

    if(this.new_capacity > this.currentLot.maxCap || this.new_capacity < 0)
    {
      console.error("Capacity can't be greater than Max Capacity or less than 0");
      return;
    }

    this.backend.addStat({
      action: action,
      currCap: this.currentLot.currCap,
      lot: this.currentLot.name,
      time: firebase.firestore.Timestamp.fromDate(new Date())
    });

    this.backend.updateItem({
      name: this.currentLot.name,
      addr: this.currentLot.addr,
      currCap: this.new_capacity,
      maxCap: this.currentLot.maxCap,
      desc: this.currentLot.desc,
      loc: this.currentLot.loc,
      lotType: this.currentLot.lotType,
      id: this.currentLot.id,
    });

    await this.lotDataAlert(converted_number_of_vehicles);

  }

  goToAllLots(){
    this.router.navigate(['all-lots']);
  }

  async lotDataAlert(converted_number_of_vehicles) { 
    const alert = await this.alertController.create({
      message: this.currentLot.name + " had " + (this.currentLot.currCap) +
                " and now has " + this.new_capacity + " spaces filled.", 
      buttons: [
        {
          text: 'Ok',
          handler: () => {

            this.goToAllLots()
          }
        }
      ],
      
    });
    await alert.present();
    let result = await alert.onDidDismiss();
    
    console.log(result);

  }

  // Plans for later on:
  //   Add in a pop up error if user enters a number that makes occupancy less than 0 or greater than maxCap and make function quit
  //   Add in error checking to make sure user enters in numbers
  //   Display the current number of open spots and max occupancy, maybe make it reactive to reflect what
  //     user is inputing
  //   Change icon based on capacity
}
