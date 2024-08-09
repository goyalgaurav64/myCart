import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './types/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpClient = inject(HttpClient);

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getProductById(productId: number) {
    return this.http.get<Product>(
      'http://localhost:3000/products/' + productId
    );
  }

  addProduct(product: Product) {
    return this.http.post<Product>('http://localhost:3000/products', product);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(
      'http://localhost:3000/products/' + product.id,
      product
    );
  }
}
