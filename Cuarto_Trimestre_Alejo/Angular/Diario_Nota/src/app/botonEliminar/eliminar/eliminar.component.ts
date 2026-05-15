import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.scss'
})
export class EliminarComponent {

  @Input() index: number = 0;

  @Output() eliminarNota = new EventEmitter<number>();

  eliminar(index: number) {
    this.eliminarNota.emit(index);
  }

}
