import { Component, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication-service";
import { AlertController } from '@ionic/angular';
import firebase from 'firebase';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  curr_ut:any = "Unknown Academic Standing"
  new_usertype_form: FormGroup;
  newusert:any = ""

  constructor( public authService: AuthenticationService, public FormBuilder: FormBuilder, public router: Router, public alertc: AlertController) { }

  ngOnInit() {
      this.curr_ut = this.authService.gUserType();
      this.new_usertype_form = this.FormBuilder.group({
        newusert: new FormControl('',Validators.required),
      });
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

  // async ChangeTypeAlert(){
  //   const alert = await this.alertc.create({
  //     cssClass: 'UserType',
  //     header:'Position',
  //     inputs:[
  //       {
  //         name: 'Undergraduate Student',
  //         type: 'radio',
  //         label: 'Undergraduate Student',
  //         value: 'Undergraduate Student',
  //         checked: true
  //       },  {
  //         name: 'Graduate Student',
  //         type: 'radio',
  //         label: 'Graduate Student',
  //         value: 'Graduate Student',
  //       },  {
  //         name: 'Alumni',
  //         type: 'radio',
  //         label: 'Alumni',
  //         value: 'Alumni',
  //       },  {
  //         name: 'Faculty',
  //         type: 'radio',
  //         label: 'Faculty',
  //         value: 'FacStaff',
  //       },  {
  //         name: 'Staff',
  //         type: 'radio',
  //         label: 'Staff',
  //         value: 'FacStaff',
  //       },
  //     ],
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {console.log("Alert Operation Cancelled")}
  //       },
  //       {
  //         text:'Confirm',
  //         handler: value => {
  //           console.log("Alert Operation Accepted")
  //           this.cUT(value);
  //         }
  //       }
  //     ]
  //   });
  //   await alert.present();
  // }

  async cUT(newusertype){
    console.log("User Type Changed to " + newusertype.newusert)
    this.authService.cUserType(newusertype.newusert)
    this.curr_ut = newusertype.newusert
  }

  testinguiNav() {
    this.router.navigate(['testing-ui']);
  }

  passwordResetNav() {
    this.router.navigate(['password-reset'])
  }

  deleteUser(){
    var user = firebase.auth().currentUser;
    user.delete().then(function() {
      console.log(user.uid, " deleted");
      alert("Account deleted.")
    }, function(error) {
      console.log("error deleting user");
    })

    firebase.firestore().collection("users").doc(user.uid).delete().then(function() {
      console.log("document successfully deleted");
      console.log("User " + user.uid + "deleted");
    }).catch(function (error) {
      console.error("Error removing document: " , error);
    })
    this.router.navigate(['login'])

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
            this.deleteUser();
          }
        }
      ]
    });
    await alert.present();
  }



}
