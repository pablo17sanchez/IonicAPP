import { File } from '@ionic-native/file';



import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Home2Page } from "../pages/home2/home2";
import { PagesFooterPage } from "../pages/pages-footer/pages-footer";
import { QuienesSomosPage } from "../pages/quienes-somos/quienes-somos";
import {TerminosPage} from "../pages/terminos/terminos";
import { HistoriaPage } from "../pages/historia/historia";
import { MarcoLegaPage } from "./../pages/marco-lega/marco-lega";
import { DespachoDelDirectorPage } from "./../pages/despacho-del-director/despacho-del-director";
import { OrganigramaPage } from "../pages/organigrama/organigrama";
//elements
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
///import { File  } from "@ionic-native/File";
@NgModule({
  declarations: [MyApp, HomePage, ListPage, PagesFooterPage, Home2Page, TerminosPage, QuienesSomosPage, HistoriaPage, OrganigramaPage, DespachoDelDirectorPage, MarcoLegaPage],
  imports: [BrowserModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, ListPage, Home2Page, TerminosPage, QuienesSomosPage, HistoriaPage, OrganigramaPage,DespachoDelDirectorPage,MarcoLegaPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
