import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomReactComponentWrapperComponent } from 'src/components/CustomReactComponentWrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomReactComponentWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
