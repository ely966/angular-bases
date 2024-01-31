import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: '',
    //component:
    children: [
      {
        path: 'product',
        component: ProductComponent,
      },
      {
        path: '**',
        redirectTo: 'product',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
