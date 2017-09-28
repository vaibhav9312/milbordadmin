import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public options = {
    position: ["top", "right"],
    timeOut: 5000,
    lastOnBottom: true
  }
}
