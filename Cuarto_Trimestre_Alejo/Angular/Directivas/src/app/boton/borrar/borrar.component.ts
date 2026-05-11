import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estado } from '../../app.component';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrl: './borrar.component.scss'
})
export class BorrarComponent {
  @Input() estado!: Estado;
  @Input() elementos: string[] = [];
  @Output() borrar = new EventEmitter<void>();
}
