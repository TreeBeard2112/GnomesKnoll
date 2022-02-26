import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreComponent } from './store/store.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InfoComponent } from './info/info.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    GalleryComponent,
    InfoComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
