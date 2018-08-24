import { Component } from '@angular/core';

/**
 * Generated class for the ComponentsFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'components-footer',
  templateUrl: 'components-footer.html'
})
export class ComponentsFooterComponent {

  text: string;

  constructor() {
    console.log('Hello ComponentsFooterComponent Component');
    this.text = 'Hello World';
  }

}
