import { Component, ViewEncapsulation, ViewChild,OnInit } from '@angular/core';



@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
})
export class AppDashboardComponent implements OnInit  {

    constructor() {
      console.log('Constructor dashboard -------');
    }

    ngOnInit() {
      console.log('AppDashboardComponent initialized dashboard -------');
    }
    ngAfterViewInit(): void {
      console.log('After View Init dashboard -------');
    }


}
