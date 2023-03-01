import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'akur8-dashboard',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  template: `<div class="header"><akur8-header/></div><section class="section"><router-outlet/></section><div class="footer"><akur8-footer/></div>`,
  styles: [
    `
    .header,.footer{
      height: 100px;
    }
    .section{
      height: calc(100vh - 200px);
    }

    `
  ],
})
export class DashboardComponent { }
