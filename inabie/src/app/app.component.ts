import { AlimentacionPage } from './../pages/alimentacion/alimentacion';
import { MarcoLegaPage } from './../pages/marco-lega/marco-lega';
import { Home2Page } from './../pages/home2/home2';
import { HomePage } from './../pages/home/home';

import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { Home2Page } from "../pages/home2/home2";
import { ListPage } from '../pages/list/list';
import { Component, ViewChild } from "@angular/core";
import { TerminosPage } from '../pages/terminos/terminos';
import {QuienesSomosPage  } from "../pages/quienes-somos/quienes-somos";
import { HistoriaPage } from '../pages/historia/historia';
import { OrganigramaPage } from '../pages/organigrama/organigrama';
import { DespachoDelDirectorPage } from '../pages/despacho-del-director/despacho-del-director';
import { SocialPage } from '../pages/social/social';
import { SaludPage } from '../pages/salud/salud';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
//
    // used for an example of ngFor and navigation { title: 'List', component: ListPage }
    this.pages = [
      // { title: 'Inicio ', component: HomePage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
    //  this.splashScreen.hide();
    });
  }
  inicio(){
   
    this.nav.push(HomePage);
  }


  terminos(){
   
    this.nav.push(TerminosPage);
 
  }

  QuienesSomos(){
   
    this.nav.push(QuienesSomosPage);
  }


  Historia(){

this.nav.push(HistoriaPage);

  }
  Alimentacion() {

    this.nav.push(AlimentacionPage);

  } 
  Social() {

    this.nav.push(SocialPage);

  }
  Salud() {

    this.nav.push(SaludPage);

  }
Organigrama(){


this.nav.push(OrganigramaPage);

}


Despacho(){


this.nav.push(DespachoDelDirectorPage)

}

MarcoLegal(){


  this.nav.push(MarcoLegaPage)
}

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
