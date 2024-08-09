import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddProductReactiveFormComponent } from './components/add-product-reactive-form/add-product-reactive-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'product/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'add-product',
    component: AddProductComponent,
  },
  {
    path: 'edit-product/:id',
    component: EditProductComponent,
  },
  {
    path: 'new-product',
    component: AddProductReactiveFormComponent,
  },
];
