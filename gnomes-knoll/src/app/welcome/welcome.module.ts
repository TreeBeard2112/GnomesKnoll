import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from './welcome.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { FlexModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeCardComponent
  ],
  imports: [
    BrowserModule,
    FlexModule
  ],
  exports: [
    WelcomeComponent
  ],
  providers: [],
})
export class WelcomeModule { }
