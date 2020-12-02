import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { Lot } from '../../interfaces';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import firebase from 'firebase';


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.page.html',
  styleUrls: ['./analytics.page.scss'],
})
export class AnalyticsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  this.fetch();
  }

  doRefresh(event) {
    this.fetch();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  fetch(){
    //TODO
  }

}
