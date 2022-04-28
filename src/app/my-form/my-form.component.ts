import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
})
export class MyFormComponent implements OnInit {
  productForm: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      prodName: new FormControl(null),
      prodPrice: new FormControl(null),
      prodQuant: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.productForm);
  }
}
