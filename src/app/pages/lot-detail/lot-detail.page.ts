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
import { compileComponentFromMetadata, rendererTypeName } from '@angular/compiler';
import { SocialSharing } from '@ionic-native/social-sharing/ngx'; 
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-lot-detail',
  templateUrl: './lot-detail.page.html',
  styleUrls: ['./lot-detail.page.scss'],})
export class LotDetailPage implements OnInit {

  // Declare variables for charts and graphs
  public lotdata: number[];
  private openSpots:number = 0;
  private visible:boolean = true;
  private statistics:Array<Stat> = [];
  private times:Array<Date> = [];
  private capacity:Array<Number> = [];
  // coords and map are for the static map. 
  private coords:string = "";
  private map;

  
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
    time: firebase.firestore.Timestamp.fromDate(new Date())
  }

  constructor( private router: Router, private route: ActivatedRoute,
               private backend: BackendService,
               private locServ: LocationService,
               public authService: AuthenticationService,
               private social: SocialSharing,
               private alert: AlertController) { 
  }

  ngOnInit() {
    this.fetchLotData();
    this.authService.setFavorites();
  }

  /* fetchLotData() uses the activated route to get the dynamic parameter from the
     routing module, get the data from firebase, then populate the page's data. */
  async fetchLotData() {
    // We get to this page from an Activated Route
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
      // This is used for the static map.
      this.coords = "" + this.currentLot.loc.latitude + "," + this.currentLot.loc.longitude;

      this.map = "https://maps.googleapis.com/maps/api/staticmap?center=Univeristy+of+South+Carolina,Columbia,SC\
      &zoom=14&size=600x300&maptype=roadmap \
      &markers=color:blue%7Clabel:Here%7C" + this.coords +
      "&key=AIzaSyB7Xv6-oY-j1-PuLSfpd6WA4gDORz1WVmE";

      // For favorites star in the top right, refresh favorites, then star it if needed.
      var starred:Array<string> = this.authService.setFavorites();
      if(starred.indexOf(this.currentLot.name) == -1) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    }).catch((message) => {
      console.log("Could not get lot data.")
    });

    this.lineChart(); 
    this.barChart(this.currentLot); 
  }

  /* Uses the icon on the page as a button to navigate the the user
     to thier phone's maps app for directions. */
  toLot(location:firebase.firestore.GeoPoint):void {
    this.locServ.openMapsApp(location.latitude + "," + location.longitude); 
  }

  /* share() is responsible for sending friends a text with the lots number of 
     remaining spaces. This will prompt the user's messaging platform. */
  share(lot:Lot):void {
    let mesg:string = "Go park in " + lot.name + ". There's " + 
        (lot.maxCap-lot.currCap) + " spaces remaining. It's located at:\n " +
        lot.addr + "\n\n-From your friends, LotSpotter";

    this.social.shareViaSMS(mesg,"").then((res) =>{
      this.showAlert("Going to messages...");
      console.log(res);
    }).catch((err) => {
      this.showAlert("We could not share this.");
    });

  }

  /* A function for AlertController creation and prompt.
  
     Requires a text string for the dialog box in the alert.
  */
  async showAlert(text:string) {
    const temp = await this.alert.create({
      message: text,
      buttons: ["OK"]
    });
    await temp.present();
  }

  /* The two below functions are called by the star icon in the top of
     the page, for favorites. */
  addFavorites(lotName:string) {
      this.authService.updateFavorites(lotName);
  }

  removeFavorites(lotName:string) {
      this.authService.updateFavorites(lotName);
  }

  /* lineChart() will read all the simulated entries/exits in the
     'stats' fb collection, sort them by time, parse for the specific
     lot's stats, and create a graph over time.

     This is an intensive function that could be delayed on page load.
  */
  async lineChart() {
    // Grab lot name from the active route.
    let param:string = this.route.snapshot.paramMap.get("name");

    // Retrieve the collection of simulated lot entries and exits.
    await this.backend.getStats(param).then((res) => {
      this.statistics = res;
      this.statistics.sort((a,b) => a.time.toDate().getTime() - b.time.toDate().getTime());
    })

    // create today's date to only add stats within 30 days
    var today = Date.now();
    console.log("todays date: "+today);

    // only add the stats to chart that are within 30 days
    for(var i = 0; i < this.statistics.length; i++) {
      if((today - this.statistics[i].time.toDate().getTime())/(1000*60*60*24.0) <= 30){
        this.times.push(this.statistics[i].time.toDate());
        this.capacity.push(this.statistics[i].currCap);
      }
    }

    var myChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: this.times,
        datasets: [{
          label: "Capacity",
          data: this.capacity,
          backgroundColor: 'rgba(255, 99, 97, 0.2)'
        }],
      },
      options: {
        scales: {
          xAxes: [ {
              display: true,
              type: 'time',
              time: {
                parser: 'MM/DD/YYYY HH:mm',
                tooltipFormat: 'll HH:mm',
                unit: 'day',
                unitStepSize: 1,
                displayFormats: {
                  'day': 'MM/DD'
                }
              }
            }
          ]
        }
      }
  });
  }

  toggle(lotName:string) {
    this.visible = !this.visible;
  }

  /* barChart() plots the number of spaces open, remaining, and in use. 
  */
  barChart(curr_lot) {
    // Current standings chart
    var myChart = new Chart("myChart2", {
      type: 'bar',
      data: {
          labels: ['Spots','Taken', 'Free'],
          datasets: [{
              label: (curr_lot.name + " Current"),
              // Compare maximum, current, and vacant spots
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
