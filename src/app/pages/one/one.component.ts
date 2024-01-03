import { Component, ViewEncapsulation, ViewChild,OnInit } from '@angular/core';



@Component({
  selector: 'one',
  templateUrl: './one.component.html',
})
export class AppOneComponent implements OnInit  {

    constructor() {
      console.log('Constructor  one ------- one');
    }

    ngOnInit() {
      console.log('AppDashboardComponent initialized one ------- one');
    }
    ngAfterViewInit(): void {
      console.log('After View Init one ------- one');
    }


}
