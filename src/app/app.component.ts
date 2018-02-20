import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-header></app-header> 
  <div class="row">
    <app-left-navigation></app-left-navigation>
    <app-right-navigation></app-right-navigation>
  </div>
  <p></p>
  <app-footer></app-footer>
`
})
export class AppComponent {
  title = 'app';
}
