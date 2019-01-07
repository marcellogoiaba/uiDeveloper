import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HotelCardComponent } from './hotel-card/hotel-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HotelCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
