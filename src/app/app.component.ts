import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'dkww-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'dont-know-what-web';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser()) {
      $(function () {
        const popovers: any = $('[data-toggle="popover"]');
        popovers.popover({ container: 'body', trigger: 'hover' });
        const toasts: any = $('.toast');
        toasts.toast('show');
        const tooltips: any = $('[data-toggle="tooltip"]');
        tooltips.tooltip();
      });
    }
  }
}
