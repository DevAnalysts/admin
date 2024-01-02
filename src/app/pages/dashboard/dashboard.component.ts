import { Component, ViewEncapsulation, ViewChild,OnInit } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  template: `
  <h2>Dashboard Content Goes Here</h2>

`,
  encapsulation: ViewEncapsulation.None,
})
export class AppDashboardComponent implements OnInit  {




    constructor() {
      console.log('Constructor-------');
    }



    ngOnInit() {
      console.log('AppDashboardComponent initialized');
    }
    ngAfterViewInit(): void {
      console.log('After View Init------');
    }


}
