import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';

import * as moment from "moment";


@Component({
  selector: "page-calendario",
  templateUrl: "calendario.html"
})
export class CalendarioPage {
  public eventSource = [];

    public thesource = [];



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


    var date = new Date();
    var eventType = 1;

    var startDay = 1;
    var endDay = 25;
    var startTime;
    var endTime;
    startTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + startDay));



    endTime = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate() + endDay));
    events.push({
      title: 'All Day - prueba ' ,
      startTime: startTime,
      endTime: endTime,
      allDay: true
    });
    
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
  
  }
}
