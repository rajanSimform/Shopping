import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  allProducts: Product[];
  selectedProduct: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.allProducts = this.productService.getProducts();
  }
  viewProduct(id: number) {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
  deleteProduct(id: number) {
    this.productService.deleteProductById(id);
  }
}
