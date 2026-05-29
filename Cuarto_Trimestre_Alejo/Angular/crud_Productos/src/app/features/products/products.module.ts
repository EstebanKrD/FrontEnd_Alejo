import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductPageComponent,
    ProductFormComponent,
    ProductListComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductPageComponent
  ]
})
export class ProductsModule { }
