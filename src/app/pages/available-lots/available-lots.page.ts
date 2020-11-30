import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-lots',
  templateUrl: './available-lots.page.html',
  styleUrls: ['./available-lots.page.scss'],
})
export class AvailableLotsPage implements OnInit {

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
    // TODO
  }

}
