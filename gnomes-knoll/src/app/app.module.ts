import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeModule } from './welcome/welcome.module';
import { StoreComponent } from './store/store/store.component';
import { GalleryComponent } from './gallery/gallery.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    GalleryComponent,
    InfoComponent,
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
