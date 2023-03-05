import { Component } from '@angular/core';

@Component({
  selector: 'akur8-footer',
  standalone: true,
  imports: [],
  template: `<footer class="style center"><h2 id="footer">Page Footer</h2></footer> `,
  styles: [
    `.style{
      position : fixed;
      bottom : 0;
      left : 0;
      width: 100%;
      height: 100px;
      background-color: blue;
    }`
  ],
})
export class FooterComponent {}
