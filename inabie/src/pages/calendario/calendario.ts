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
  //eventSource;
  selectedDay = new Date();
  calendar = {
    mode: "month",
    currentDate: this.selectedDay,
    locale: "en-GB"
  };

  loadEvents() {
    this.eventSource = this.createRandomEvents();
  }
  createRandomEvents() {
    var events = [];
    for (var i = 0; i < 50; i += 1) {
      var date = new Date();
      var eventType = Math.floor(Math.random() * 2);
      var startDay = Math.floor(Math.random() * 90) - 45;
      var endDay = Math.floor(Math.random() * 2) + startDay;
      var startTime;
      var endTime;
      if (eventType === 0) {
        startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));
        


        endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));

        events.push({
          title: 'All Day - prueba ' + i,
          startTime: startTime,
          endTime: endTime
          //, allDay: true
        });
      } 
    }
    return events;
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalclr: ModalController,
    private alertCtrl: AlertController
  ) {
    this.loadEvents();

  }

  onTimeSelected(env) {
    this.selectedDay = env.selectedTime;
  }

  ionViewDidLoad() {
   // console.log("ionViewDidLoad CalendarioPage");
  }
}
