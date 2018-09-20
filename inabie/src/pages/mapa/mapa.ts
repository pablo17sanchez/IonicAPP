import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: "page-mapa",
  templateUrl: "mapa.html"
})
export class MapaPage {
  map: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
    
  ) {}

  ionViewDidLoad() {
   
  }




}
