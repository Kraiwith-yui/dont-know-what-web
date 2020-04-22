import { environment } from './../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'dkww-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dont-know-what-web';
  environment = environment;
}
