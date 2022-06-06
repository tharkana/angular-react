import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-react';

  public counter = 21;

  public inputText: string = '';

  public handleOnClick() {
    this.counter++;
  }

  public angularTextChange(event:any) {
    this.inputText = event.target.value;
  }

}
