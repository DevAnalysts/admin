import { Component, ViewEncapsulation, ViewChild,OnInit } from '@angular/core';



@Component({
  selector: 'list',
  templateUrl: './list.component.html',
})
export class AppListComponent implements OnInit  {

    constructor() {
      console.log('Constructor  second ------- second');
    }

    ngOnInit() {
      console.log('AppDashboardComponent initialized second ------- second');
    }
    ngAfterViewInit(): void {
      console.log('After View Init second ------- second');
    }


}
