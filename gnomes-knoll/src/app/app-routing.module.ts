import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { InfoComponent } from './info/info.component';
import { StoreComponent } from './store/store.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'info', component: InfoComponent },
  { path: 'gallery', component: GalleryComponent},
  { path: 'store', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
