import { Injectable } from '@angular/core';
import { Product } from '../product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    new Product('Mobile', 5000, 9),
    new Product('Meggie', 50, 5),
    new Product('AC', 55000, 2),
    new Product('Pen', 10, 99),
    new Product('Tshirt', 5000, 9),
  ];
  constructor() {}

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products[id - 1];
  }

  updateProduct(id: number, updatedProduct: Product) {
    this.products[id - 1] = updatedProduct;
  }

  deleteProductById(id: number) {
    this.products.splice(id - 1, 1);
  }
}
