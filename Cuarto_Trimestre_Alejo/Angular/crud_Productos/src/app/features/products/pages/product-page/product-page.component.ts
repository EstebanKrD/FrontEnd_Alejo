import { Component } from '@angular/core';
import { ProductService } from '../../../../core/services/product.service';
import { Product } from '../../../../core/product.model';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }

  onProductAdded(product: Product): void {
    this.products = this.productService.getProducts();
  }

  onAddProduct(product: Product): void {
    this.productService.addProduct(product);
    this.products = this.productService.getProducts();
  }

  onDeleteProduct(id: number): void {
    this.productService.deleteProduct(id);
    this.products = this.productService.getProducts();
  }

}
