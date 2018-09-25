import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SreenFirstComponent } from './sreen-first/sreen-first.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
const appRoutes: Routes = [
  {
    path:'',
    component: SreenFirstComponent
  },
  {
    path:'home',
    component: SreenFirstComponent
  },
  {
    path:'profile',
    component: ProfileComponent
  },
  {
    path:'proyectos',
    component: ProyectosComponent
  },
  {
    path: 'contacto',
    component: ContactoComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SreenFirstComponent,
    MenuComponent,
    ProfileComponent,
    ProyectosComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
