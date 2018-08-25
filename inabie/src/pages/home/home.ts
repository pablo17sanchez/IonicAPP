import { Component,ViewChild } from '@angular/core';
import { NavController,Platform,Nav } from 'ionic-angular';
import { ListPage  } from "../list/list";
import { Home2Page } from "../home2/home2";
import { TerminosPage } from "../terminos/terminos";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  splash = true;
  secondPage = ListPage;

  tabbarElemente:any;
  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);

   // this.nav.push(TerminosPage); 
  }

}
