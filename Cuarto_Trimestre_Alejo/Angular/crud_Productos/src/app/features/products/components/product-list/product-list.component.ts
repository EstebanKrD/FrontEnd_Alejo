import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { Product } from '../../../../core/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  @Input() products: Product[] = [];
  @Output() deleteProduct = new EventEmitter<number>();

  onDelete(id: number): void {
    this.deleteProduct.emit(id);
  }
}
