import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import firebase from 'firebase';
import { Lot } from '../../interfaces';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

import { LocationService } from '../../services/location.service'; 
@Component({
  selector: 'app-purchase-a-pass-review',
  templateUrl: './purchase-a-pass-review.page.html',
  styleUrls: ['./purchase-a-pass-review.page.scss'],
})
export class PurchaseAPassReviewPage implements OnInit {

  constructor(private router: Router, 
    public formBuilder:FormBuilder,
    private route:ActivatedRoute) { }

  purchase: any;
  ngOnInit() {
    this.route.params.subscribe(
      param => {
        this.purchase = param
        console.log(this.purchase);
      })
  }

}
