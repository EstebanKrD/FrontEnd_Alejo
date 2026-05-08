import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CambiarColoresComponent } from './botones/cambiar-colores/cambiar-colores.component';
import { CuboColoresComponent } from './pantalla/cubo-colores/cubo-colores.component';

@NgModule({
  declarations: [AppComponent, CambiarColoresComponent, CuboColoresComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
