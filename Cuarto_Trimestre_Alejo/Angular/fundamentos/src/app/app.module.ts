import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Funcion decoradora
@NgModule({
  // Declaración de componentes de este módulo
  declarations: [AppComponent],
  // Importación de otros módulos necesarios para este módulo
  imports: [BrowserModule],
  // Proveedores
  providers: [],
  // Es una propiedad que solo va en el modulo principal.
  // India cual es el componente inicial.
  bootstrap: [AppComponent],
})
export class AppModule {}
