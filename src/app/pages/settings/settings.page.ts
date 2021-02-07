import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication-service";
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  curr_ut:any = "Unknown"

  constructor( public authService: AuthenticationService, public router: Router, public alertc: AlertController) { }

  ngOnInit() {
      this.curr_ut = this.authService.gUserType();
  }
  ngOnChanges(){
    this.curr_ut = this.authService.gUserType();
  }
  refreshUsertype(event) {
    this.curr_ut = this.authService.gUserType();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 1000);
  }

  async ChangeTypeAlert(){
    const alert = await this.alertc.create({
      cssClass: 'UserType',
      header:'Position',
      inputs:[
        {
          name: 'Undergraduate Student',
          type: 'radio',
          label: 'Undergraduate Student',
          value: 'Undergraduate Student',
          checked: true
        },  {
          name: 'Graduate Student',
          type: 'radio',
          label: 'Graduate Student',
          value: 'Graduate Student',
        },  {
          name: 'Alumni',
          type: 'radio',
          label: 'Alumni',
          value: 'Alumni',
        },  {
          name: 'Faculty',
          type: 'radio',
          label: 'Faculty',
          value: 'FacStaff',
        },  {
          name: 'Staff',
          type: 'radio',
          label: 'Staff',
          value: 'FacStaff',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {console.log("Alert Operation Cancelled")}
        },
        {
          text:'Confirm',
          handler: value => {
            console.log("Alert Operation Accepted")
            this.cUT(value);
          }
        }
      ]
    });
    await alert.present();
  }

  cUT(newusertype){
    this.authService.cUserType(newusertype)
  }

  testinguiNav() {
    this.router.navigate(['testing-ui']);
  }

  async QueDelete(){
    let alert = await this.alertc.create({
      message: 'Are you sure you want to delete your Account? This can not be undone.',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Delete clicked');
            this.authService.deleteUser();
          }
        }
      ]
    });
    await alert.present();
  }



}
