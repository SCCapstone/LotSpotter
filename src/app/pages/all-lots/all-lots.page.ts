import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-all-lots',
  templateUrl: './all-lots.page.html',
  styleUrls: ['./all-lots.page.scss'],
})
export class AllLotsPage implements OnInit {

  tasks:any = [];

  constructor(
    private afFirestore: AngularFirestore
  ) { }

  fetch() {
    this.afFirestore.collection('lots').snapshotChanges().subscribe(res => {
      console.log(res);
      let tmp = [];
      res.forEach(task => {
        tmp.push({ key: task.payload.doc.id, ...task.payload.doc.data });
      })
      console.log(tmp);
      this.tasks = tmp;
    })
  }

  ngOnInit() {
  }

}
