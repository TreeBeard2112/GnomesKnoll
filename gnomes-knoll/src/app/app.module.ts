import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeModule } from './welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WelcomeModule,
    FlexModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
