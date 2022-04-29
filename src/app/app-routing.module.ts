import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { MyFormComponent } from './my-form/my-form.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'my-form', component: MyFormComponent },
  { path: 'products', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
