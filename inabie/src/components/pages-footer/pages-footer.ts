import { Component } from '@angular/core';

/**
 * Generated class for the PagesFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'pages-footer',
  templateUrl: 'pages-footer.html'
})
export class PagesFooterComponent {

  text: string;

  constructor() {
    console.log('Hello PagesFooterComponent Component');
    this.text = 'Hello World';
  }

}
