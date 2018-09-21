import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { TextToSpeech } from "@ionic-native/text-to-speech";
import { getData} from "../../data/data";

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
    locale: "en-GB"
  };

  loadEvents() {
    this.eventSource = this.createRandomEvents();
  }
  createRandomEvents() {
    var events = [];


var data = getData();

//console.log(JSON.stringify(data));
    for (var a in data) {
      console.log(a.title);
    }


    var date = new Date();
    var eventType = 1;

    var startDay = 1;
    var endDay = 25;
    var startTime;
    var endTime;
    startTime = new Date(Date.UTC(2018, date.getUTCMonth(), 1));

    endTime = new Date(Date.UTC(2010, date.getUTCMonth(), 28));

  
    events.push({
      title: "All Day - prueba ",
      startTime: new Date(2018, 8, 24),
      endTime: new Date(2018, 8, 24),
      allDay: true
    });
    events.push({
      title: "All Day - prueba ",
      startTime: new Date(2018, 8, 25),
      endTime: new Date(2018, 8, 25),
      allDay: true
    });

    return events;
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalclr: ModalController,
    private alertCtrl: AlertController,
    private tts: TextToSpeech
  ) {
    this.loadEvents();
  }

  onTimeSelected(env) {
    this.selectedDay = env.selectedTime;
  }

  ionViewDidLoad() {}

  leer() {
    this.tts
      .speak("Hello World")
      .then(() => console.log("Success"))
      .catch((reason: any) => console.log(reason));
  }


}
