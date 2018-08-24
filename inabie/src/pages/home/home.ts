import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListPage  } from "../list/list";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  splash = true;
  secondPage = ListPage;

  tabbarElemente:any
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

}
