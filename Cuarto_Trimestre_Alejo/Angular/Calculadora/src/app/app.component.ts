import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Calculadora';
  operacion: string = '';
  resultado: number | null = null;
  error: string | null = null;

  manejarBoton(valor: string) {
    if (valor === 'C') {
      this.operacion = '';
      this.resultado = null;
      this.error = null;
    } else if (valor === '=') {
      try {
        this.resultado = eval(this.operacion);
        this.error = null;
      } catch (e) {
        this.resultado = null;
        this.error = 'Error en la operación';
      }
    } else if (valor === 'DEL') {
      this.operacion = this.operacion.slice(0, -1);
    } else {
      this.operacion += valor;
    }
  }
}
