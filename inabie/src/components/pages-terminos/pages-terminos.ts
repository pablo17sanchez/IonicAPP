import { Component } from '@angular/core';

/**
 * Generated class for the PagesTerminosComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pages-terminos',
  templateUrl: 'pages-terminos.html'
})
export class PagesTerminosComponent {

  text: string;

  constructor() {
    console.log('Hello PagesTerminosComponent Component');
    this.text = 'Hello World';
  }

}
