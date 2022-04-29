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
  selectProdToggle: boolean = false;
  selectedProduct: Product;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    console.log(this.selectedProduct);

    this.allProducts = this.productService.getProducts();
  }

  displaySelected(id: number) {
    this.selectedProduct = this.allProducts[id - 1];
  }

  displayToggle(id: number) {
    // if item is selected
    if (this.selectProdToggle) {
      // if selected item id is same then toggle
      if (
        id - 1 ===
        this.allProducts.findIndex((x) => x === this.selectedProduct)
      ) {
        this.selectProdToggle = false;
      }
      // set the selected item by setting toggled
    } else {
      this.selectProdToggle = true;
    }
    console.log('after:', this.selectProdToggle);
    this.displaySelected(id);
  }
}
