import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

import * as moment from "moment";

/**
 * Generated class for the CalendarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: "page-calendario",
  templateUrl: "calendario.html"
})
export class CalendarioPage {
  public eventSource = [];
  selectedDay = new Date();
  calendar = {
    mode: "month",
    currentDate: this.selectedDay,
    locale: 'en-GB'

  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalclr: ModalController,
    private alertCtrl: AlertController
  ) {}

  onTimeSelected(env) {
    this.selectedDay = env.selectedTime;
  }

  onEventSelected(env) {
    let start = moment(env.startTime).format("LLLL");
    let end = moment(env.endTime).format("LLLL");
    let alert = this.alertCtrl.create({
      title: "" + env.title,
      subTitle: "From" + start + "<br> To" + end,
      buttons: ["OK"]
    });
  }
  addEvent() {
    let modal = this.modalclr.create("EventModalPage", {
      selectedDay: this.selectedDay
    });
    modal.present();

    modal.onDidDismiss(data => {
      if (data) {
        let envData = data;

        envData.startTime = new Date(data.startTime);
        envData.ennTime = new Date(data.endTime);

        let events = this.eventSource;
        events.push(envData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        });
      }
    });
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad CalendarioPage");
  }
}
