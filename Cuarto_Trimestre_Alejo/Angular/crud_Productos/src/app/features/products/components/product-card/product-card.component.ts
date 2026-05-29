import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../../core/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {

  @Input() product!: Product;
  @Output() deleteProduct = new EventEmitter<number>();

  onDelete(): void {
    this.deleteProduct.emit(this.product.id);
  }

  


}
