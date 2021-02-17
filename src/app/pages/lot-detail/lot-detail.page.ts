import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import firebase from 'firebase';

import { BackendService } from '../../services/backend.service';
import { Lot, Stat, User } from '../../interfaces';
import { LocationService } from 'src/app/services/location.service';

import { AuthenticationService } from "../../services/authentication-service";

import { Chart } from 'chart.js';
import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';

@Component({
  selector: 'app-lot-detail',
  templateUrl: './lot-detail.page.html',
  styleUrls: ['./lot-detail.page.scss'],})
export class LotDetailPage implements OnInit {

  public lotdata: number[];
 
  private map = "https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap \
  &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318 \
  &markers=color:red%7Clabel:C%7C40.718217,-73.998284 \
  &key=AIzaSyB7Xv6-oY-j1-PuLSfpd6WA4gDORz1WVmE"
  
  private openSpots:number = 0;

  public currentLot:any = {
    name: "...",
    addr: "...",
    currCap: 0,
    maxCap: 0,
    desc: "...",
    loc: null,
    lotType: "...",
    id: "..."
  };

  private stat:Stat = {
    action: 0,
    lot: "...",
    currCap: 0,
    time: firebase.firestore.Timestamp.fromDate(new Date()),
  }

  private currUser:User = {
    email: "",
    favorites: [],
    permits:[],
    uid:""
  };

  constructor( private router: Router, private route: ActivatedRoute,
               private backend: BackendService,
               private locServ: LocationService,
               public authService: AuthenticationService) { 
  }

  ngOnInit() {
    this.fetchLotData();
  }

  async fetchLotData() {
    // var self = this;
    let param:string = this.route.snapshot.paramMap.get("name"); // src: https://www.youtube.com/watch?v=DZrWzoW4_4M
    await this.backend.getLotData(param).then((res) => {
      this.currentLot = {
        name:res.name,
        addr:res.addr,
        currCap:res.currCap,
        maxCap:res.maxCap,
        desc:res.desc,
        loc:res.loc,
        lotType:res.lotType,
        id:res.id
      }
      this.openSpots = res.maxCap - res.currCap;
      // TODO: Call the image API request.
    }).catch((message) => {
      console.log("Could not get lot data.")
    });

    console.log("Viewing Lot: " + param);
    // console.log("Address is: "+ this.currentLot.addr)
    // console.log("Address Second is: "+ this.currentLot.addr)

    console.log(Number(this.openSpots),"  ",Number(this.currentLot.currCap),"  ",Number(this.currentLot.maxCap))
    this.showChart(this.currentLot);

  }

  toLot(location:firebase.firestore.GeoPoint):void {
    this.locServ.openMapsApp(location.latitude + "," + location.longitude); 
  }

  getImage() {

  }

  addFavorites(lotName:string) {
    /*console.log("user id: "+this.authService.userData.uid);
    console.log("user email: "+this.authService.userData.email);
    this.backend.getUser(this.authService.userData.uid).then((res)=> {
      console.log("Viewing User: "+ this.currUser.email);
      this.currUser = res;
      this.currUser.favorites.push(lotName);
    }).catch((message)=> {
      console.log("Could not get user data and add favorite.")
    });*/
    this.currUser.uid = this.authService.userData.uid;
    this.backend.getUser(this.currUser.uid);
    console.log("Adding "+lotName);
    this.currUser.favorites.push(lotName);
    

    let newValues = {
      email: this.currUser.email,
      favorites: this.currUser.favorites,
      permits: this.currUser.permits,
      uid: this.currUser.uid
    }
    this.backend.updateUser(newValues);
  }

  showChart(curr_lot) {
    var myChart = new Chart("myChart", {
      type: 'bar',
      data: {
          labels: ['Max','Taken', 'Free'],
          datasets: [{
              label: curr_lot.name,
              data: [Number(curr_lot.maxCap), Number(curr_lot.currCap), Number(this.openSpots)],
              backgroundColor: [
                  'rgba(255, 99, 97, 0.2)',
                  'rgba(185, 23, 195, 0.2)',
                  'rgba(97, 255, 99, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 97, 1)',
                  'rgba(185, 23, 195, 1)',
                  'rgba(97, 255, 99, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
        title: curr_lot.name,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
  }

}
