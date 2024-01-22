import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PiComponent } from './pi/pi.component';
import { CiComponent } from './ci/ci.component';
import { EbComponent } from './eb/eb.component';
import { WeComponent } from './we/we.component';

@NgModule({
  declarations: [
    AppComponent,
    PiComponent,
    CiComponent,
    EbComponent,
    WeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
