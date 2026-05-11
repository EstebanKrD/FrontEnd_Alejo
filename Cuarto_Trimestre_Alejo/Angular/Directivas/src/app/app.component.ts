import { Component } from '@angular/core';

export type Estado = 'pendiente' | 'cargando' | 'exito';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  estado: Estado = 'pendiente';
  elementos: string[] = [];

  onCargar(): void {
    this.estado = 'cargando';
    setTimeout(() => {
      this.estado = 'exito';
      this.elementos = ['JavaScript', 'TypeScript', 'Angular', 'React'];
    }, 2000);
  }

  onBorrar(): void {
    this.elementos = [];
    this.estado = 'pendiente';
  }
}
