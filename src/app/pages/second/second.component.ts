import { Component, ViewEncapsulation, ViewChild,OnInit } from '@angular/core';



@Component({
  selector: 'second',
  templateUrl: './second.component.html',
})
export class AppSecondComponent implements OnInit  {

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
