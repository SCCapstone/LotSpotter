import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import firebase from 'firebase';

import { BackendService } from '../../services/backend.service';
import { Lot, Stat } from '../../interfaces';
import { LocationService } from 'src/app/services/location.service';

import { AuthenticationService } from "../../services/authentication-service";

import { Chart } from 'chart.js';
import { parseI18nMeta } from '@angular/compiler/src/render3/view/i18n/meta';

import { SMS } from '@ionic-native/sms/ngx';
import { compileComponentFromMetadata } from '@angular/compiler';


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
  private visible:boolean = true;
  private statistics:Array<Stat> = [];
  private times:Array<Date> = [];
  private capacity:Array<Number> = [];

  public currentLot:Lot = {
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

  constructor( private router: Router, private route: ActivatedRoute,
               private backend: BackendService,
               private locServ: LocationService,
               public authService: AuthenticationService,
               private sms: SMS) { 
  }

  ngOnInit() {
    this.fetchLotData();
    this.backend.setFavorites();
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

      // For favorites star
      var starred:Array<string> = this.backend.setFavorites();
      console.log("Starred: "+starred);
      if(starred.indexOf(this.currentLot.name) == -1) {
        this.visible = false;
      } else {
        this.visible = true;
      }
      
      console.log("visible = "+this.visible);
      // TODO: Call the image API request.
    }).catch((message) => {
      console.log("Could not get lot data.")
    });

    console.log("Viewing Lot: " + param);
    // console.log("Address is: "+ this.currentLot.addr)
    // console.log("Address Second is: "+ this.currentLot.addr)

    console.log(Number(this.openSpots),"  ",Number(this.currentLot.currCap),"  ",Number(this.currentLot.maxCap))
    this.showChart();
    this.showChart2(this.currentLot);

  }

  toLot(location:firebase.firestore.GeoPoint):void {
    this.locServ.openMapsApp(location.latitude + "," + location.longitude); 
  }

  getImage() {
    // TODO: get the static api request for each lot.
  }

  share(lot:Lot):void {
    let mesg:string = "Go park in " + lot.name + ". There's " + 
        (lot.maxCap-lot.currCap) + " spaces remaining. It's located at:\n " +
        lot.addr + "\n\n-From your friends, LotSpotter";
    // console.log(mesg);
    this.sms.send('', mesg);
  }

  addFavorites(lotName:string) {
      this.backend.updateFavorites(lotName);
  }

  removeFavorites(lotName:string) {
      this.backend.updateFavorites(lotName);
  }

  async showChart() {
    let param:string = this.route.snapshot.paramMap.get("name");
    console.log("Getting stats from "+param);

    await this.backend.getStats(param).then((res) => {
      this.statistics = res;
    })

    for(var i = 0; i < this.statistics.length; i++) {
      this.times.push(this.statistics[i].time.toDate());
      this.capacity.push(this.statistics[i].currCap);
    }

    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
        datasets: [{
          data: this.capacity
        }],
        labels: this.times
      },
      options: {
        showLines: true
      }
  });
  }

  toggle(lotName:string) {
    this.visible = !this.visible;
  }

  showChart2(curr_lot) {
    var myChart = new Chart("myChart2", {
      type: 'bar',
      data: {
          labels: ['Spots','Taken', 'Free'],
          datasets: [{
              label: (curr_lot.name + " Current"),
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
