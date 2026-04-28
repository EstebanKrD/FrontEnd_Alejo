import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-pantalla',
  templateUrl: './pantalla.component.html',
  styleUrl: './pantalla.component.scss'
})
export class PantallaComponent {
  
@Input() operacion: string = '';
@Input() resultado: number | null = null;
@Input() error: string | null = null;

}
