import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingRoutingModule } from './app-routing-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
