import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeCard } from './welcome_card.component';



@NgModule({
  declarations: [
    WelcomeCard
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class WelcomeModule { }
