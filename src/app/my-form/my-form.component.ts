import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Product } from '../shared/product.model';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  productForm: FormGroup;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      prodName: new FormControl(null, Validators.required),
      prodPrice: new FormControl(null, [
        Validators.required,
        Validators.min(0),
      ]),
      prodQuant: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
    });
  }

  onSubmit() {
    const name = this.productForm.value.prodName;
    const price = this.productForm.value.prodPrice;
    const quantity = this.productForm.value.prodQuant;

    const newProduct = new Product(name, price, quantity);

    this.productService.addProduct(newProduct);
    console.log(this.productService.getProducts());
    this.onReset();
  }

  onReset() {
    this.productForm.reset();
  }
}
