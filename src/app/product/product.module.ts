import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AddProductComponent } from './add-product/add-product.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product.component';

const prodRoutes = [
  {
    path: 'products',
    component: ProductComponent,
    children: [
      { path: '', component: ProductListComponent },
      { path: ':id', component: ProductEditComponent },
    ],
  },
];

@NgModule({
  declarations: [
    AddProductComponent,
    ProductEditComponent,
    ProductListComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(prodRoutes),
  ],
})
export class ProductModule {}
