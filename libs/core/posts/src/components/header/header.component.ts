import { Component } from '@angular/core';

@Component({
  selector: 'akur8-header',
  standalone: true,
  imports: [],
  template: ` <header class="style center"><h2>Page Header</h2></header> `,
  styles: [
    `.style{
      position : fixed;
      top : 0;
      left : 0;
      width: 100%;
      height: 100px;
      background-color: orange;
    }`
  ],
})
export class HeaderComponent {}
