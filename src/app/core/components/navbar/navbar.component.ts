import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { AppUrl } from 'src/app/models/app-url.enum';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';

@Component({
  selector: 'dkww-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  AppUrl = AppUrl;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(DOCUMENT) private document: Document) {}

  isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  get mediumWidth(): boolean {
    if (this.isBrowser()) {
      if (this.document.body.clientWidth < 768) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  ngOnInit(): void {}
}
