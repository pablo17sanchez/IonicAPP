import { MapaPage } from './../mapa/mapa';
//import { CalendarioPage } from './../calendario/calendario';
import { Component,ViewChild } from '@angular/core';
import { NavController,Platform,Nav } from 'ionic-angular';
import { ListPage  } from "../list/list";


import { CalendarioPage } from '../calendario/calendario';

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild(Nav)
  nav: Nav;
  splash = true;
  secondPage = ListPage;

  tabbarElemente: any;
  constructor(public navCtrl: NavController, public platform: Platform) {}

  ionViewDidLoad() {
    setTimeout(() => (this.splash = false), 4000);
  }

  Calendar() {
    this.navCtrl.push(CalendarioPage);

   
  }

  Mapa() {
    this.navCtrl.push(MapaPage);
 
  }
}
