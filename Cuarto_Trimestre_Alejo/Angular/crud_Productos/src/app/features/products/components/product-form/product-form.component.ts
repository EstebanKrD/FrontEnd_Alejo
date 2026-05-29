import { Component, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../core/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.scss'
})
export class ProductFormComponent {

  @Output() productoCreado = new EventEmitter<Product>();

  nombre: string = '';
  precio: number = 0;

  onSubmit(): void {
    const nuevoProducto: Product = {
      id: Date.now(),
      nombre: this.nombre,
      precio: this.precio
    };
    this.productoCreado.emit(nuevoProducto);
    this.nombre = '';
    this.precio = 0;
  }

}