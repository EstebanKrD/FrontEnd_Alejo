import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.scss',
})
export class BotonesComponent {
  @Output() botonPresionado = new EventEmitter<string>();

  presionarBoton(boton: string) {
    this.botonPresionado.emit(boton);
  }
}
