import { Component } from '@angular/core';

@Component({
  selector: 'app-left-navigation',
  template: `
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      Left Component
      </div>
  `,
})
export class LeftComponent {
  title = 'app';
}
