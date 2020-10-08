import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-enterprise/inappbrowser/ngx';

@Component({
  selector: 'app-themed-browser',
  templateUrl: './themed-browser.component.html',
  styleUrls: ['./themed-browser.component.scss'],
})
export class ThemedBrowserComponent implements OnInit {
  constructor(private inappbrowser: InAppBrowser) {}

  ngOnInit() {}
}
