import { Component, ElementRef, OnInit } from '@angular/core';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  allProducts: Product[];
  selectedProduct: Product;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log(this.selectedProduct);

    this.allProducts = this.productService.getProducts();
  }

  displaySelected(id: number) {
    this.selectedProduct = this.allProducts[id - 1];
  }
}
