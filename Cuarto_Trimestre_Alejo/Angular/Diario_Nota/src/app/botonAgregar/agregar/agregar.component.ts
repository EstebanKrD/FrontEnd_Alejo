import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrl: './agregar.component.scss',
})
export class AgregarComponent {
  @Output() notaAgregada = new EventEmitter<{
    titulo: string;
    contenido: string;
    importante: boolean;
    
  }>();

  titulo: string = '';
  contenido: string = ''
  agregar() {
    if (this.titulo.trim() && this.contenido.trim()) {
      this.notaAgregada.emit({
        titulo: this.titulo,
        contenido: this.contenido,
        importante: false
      });
      this.titulo = '';
      this.contenido = '';
    }
  }
}
