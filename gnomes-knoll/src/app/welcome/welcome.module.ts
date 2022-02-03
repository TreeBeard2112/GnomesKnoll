import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from './welcome.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { FlexModule } from '@angular/flex-layout';
import { GalleryCardComponent } from './components/gallery-card/gallery-card.component';
import { InfoCardComponent } from './components/info-card/info-card.component';
import { StoreCardComponent } from './components/store-card/store-card.component';



@NgModule({
  declarations: [
    WelcomeComponent,
    WelcomeCardComponent,
    GalleryCardComponent,
    InfoCardComponent,
    StoreCardComponent
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
