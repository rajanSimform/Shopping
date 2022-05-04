import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../../shared/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit {
  selectedItem: Product;
  selectedId: number;
  productEditForm: FormGroup;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    // console.log('constructor', this.selectedItem);
  }

  // productEditForm = this.fb.group({
  //   prodPrice: [, [Validators.required, Validators.min(0)]],
  //   prodQuant: [, [Validators.required, Validators.min(1)]],
  // });

  ngOnInit(): void {
    this.selectedId = this.route.snapshot.params['id'];
    this.selectedItem = this.productService.getProductById(this.selectedId);
    // console.log('on init', this.selectedItem);
    this.productEditForm = this.fb.group({
      prodPrice: [
        this.selectedItem.price,
        [Validators.required, Validators.min(0)],
      ],
      prodQuant: [
        this.selectedItem.quantity,
        [Validators.required, Validators.min(1)],
      ],
    });
  }

  backToPreviousBtn() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
  onUpdate() {
    this.selectedItem.price = this.productEditForm.value.prodPrice;
    this.selectedItem.quantity = this.productEditForm.value.prodQuant;
    this.productService.updateProduct(this.selectedId, this.selectedItem);
    alert('Product Updated Successfully');
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
