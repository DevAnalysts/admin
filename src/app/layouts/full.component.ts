import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSidenav } from '@angular/material/sidenav';

const MOBILE_VIEW = 'screen and (max-width: 768px)';
const TABLET_VIEW = 'screen and (min-width: 769px) and (max-width: 1024px)';
const MONITOR_VIEW = 'screen and (min-width: 1024px)';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: [],
})
export class FullComponent implements OnInit {
  constructor() {
    console.log('Constructor');
  }



  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterViewInit(): void {
    console.log('After View Init');
  }
}
