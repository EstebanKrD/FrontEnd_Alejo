import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CargarComponent } from './boton/cargar/cargar.component';
import { BorrarComponent } from './boton/borrar/borrar.component';

@NgModule({
  declarations: [
    AppComponent,
    CargarComponent,
    BorrarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
