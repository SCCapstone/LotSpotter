import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';
import firebase from 'firebase';

import { BackendService } from '../../services/backend.service';
import { Lot } from '../../interfaces';

@Component({
  selector: 'app-lot-detail',
  templateUrl: './lot-detail.page.html',
  styleUrls: ['./lot-detail.page.scss'],
})
export class LotDetailPage implements OnInit {
 
  private currentLot:Lot = {
    name: "...",
    addr: "...",
    currCap: 0,
    maxCap: 0,
    desc: "...",
    loc: null,
    lotType: "..."
  }; 

  constructor( private router: Router, private route: ActivatedRoute,
               private backend: BackendService) { 
  }

  ngOnInit() {
    let param:string = this.route.snapshot.paramMap.get("name"); // src: https://www.youtube.com/watch?v=DZrWzoW4_4M
    this.backend.getLotData(param).then((res) => {
      this.currentLot = res;
    }).catch((message) => {
      console.log("Could not get lot data.")
    });
    console.log("Viewing Lot: " + param);
  }


}
