import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication-service';
import { BackendService } from 'src/app/services/backend.service';
import { Pass } from '../../interfaces';

@Component({
  selector: 'app-add-permit',
  templateUrl: './add-permit.page.html',
  styleUrls: ['./add-permit.page.scss'],
})
export class AddPermitPage implements OnInit {

  permit_information: FormGroup;
  /* NOTE: This page is unused as of Feb 27th. We might revisit adding this in the future. */
  constructor( private router: Router,
               private formBuilder:FormBuilder,
               private auth: AuthenticationService,
               private back: BackendService ) { 

    this.permit_information = formBuilder.group({
      type:['', Validators.required],
      garage_name:[''],
      expire:['', Validators.required],
    });

  }

  ngOnInit() {
  }
  
  submit():void {

  }

}
