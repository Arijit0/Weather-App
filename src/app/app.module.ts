import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBanla_MgdH8_TsbUvAiF2Z8dJR0psMkSc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
