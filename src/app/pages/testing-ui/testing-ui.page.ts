import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase';
import { Lot } from '../../interfaces';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-testing-ui',
  templateUrl: './testing-ui.page.html',
  styleUrls: ['./testing-ui.page.scss'],
})
export class TestingUiPage implements OnInit {

  form: FormGroup;
  private database = firebase.firestore();
  private lots:Lot[] = [];

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.form = formBuilder.group({
      lot:['', Validators.required],
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
        let lot:Lot = { name: a.name,
                addr: a.addr,
                currCap: a.currCap,
                maxCap: a.maxCap,
                desc: a.desc,
                loc: a.loc,
                lotType: a.lotType
        }
        self.lots.push(lot);
      });
    });
  }

  // Plans for later on:
  //   Add in error checking so that user can't assign more open spots than the lot/garage max occupancy
  //   Add in error checking to make sure user enters in numbers
  //   Display the current number of open spots and max occupancy, maybe make it reactive to reflect what
  //     user is inputing
  //   Make it change the firebase currCap
}
