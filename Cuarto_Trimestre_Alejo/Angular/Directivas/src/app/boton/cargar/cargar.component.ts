import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Estado } from '../../app.component';

@Component({
  selector: 'app-cargar',
  templateUrl: './cargar.component.html',
  styleUrl: './cargar.component.scss'
})
export class CargarComponent {
  @Input() estado!: Estado;
  @Output() cargar = new EventEmitter<void>();
}
