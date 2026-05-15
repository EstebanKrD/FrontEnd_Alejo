import { Component } from '@angular/core';

interface Nota {
  titulo: string;
  contenido: string;
  importante: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Diario_Nota';
  notas: Nota[] = [];

  agregarNota(nota: {
    titulo: string;
    contenido: string;
    importante: boolean;
  }) {
    this.notas.push(nota);
  }

  eliminarNota(index: number) {
    this.notas.splice(index, 1);
  }

  toggleImportante(index: number) {
    this.notas[index].importante = !this.notas[index].importante;
  }
}
