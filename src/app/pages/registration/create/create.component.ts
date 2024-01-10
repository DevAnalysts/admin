import { Component, ViewEncapsulation, ViewChild,OnInit } from '@angular/core';



@Component({
  selector: 'create',
  templateUrl: './create.component.html',
})
export class AppCreateComponent implements OnInit  {

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
