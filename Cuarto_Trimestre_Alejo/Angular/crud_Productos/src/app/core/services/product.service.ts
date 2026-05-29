import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(product => product.id !== id);
  }

}
