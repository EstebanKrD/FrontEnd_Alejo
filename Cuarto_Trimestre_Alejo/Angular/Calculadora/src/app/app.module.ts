import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // 👈 AGREGA ESTO

import { AppComponent } from './app.component';
import { BotonesComponent } from './carpetaX/botones/botones.component';
import { PantallaComponent } from './carpetaX/pantalla/pantalla.component';

@NgModule({
  declarations: [
    AppComponent,
    BotonesComponent,
    PantallaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule // 👈 AGREGA ESTO
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }