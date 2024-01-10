import { Component ,OnInit} from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent implements OnInit {
  constructor(private appComponent: AppComponent) {}

  ngOnInit() {
    // Set showHeader to false when LoginComponent is initialized
    // this.appComponent.showHeader = false;
    // this.appComponent.showSidebar = false;
  }
}
