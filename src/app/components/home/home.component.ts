import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SearchProductComponent } from '../search-product/search-product.component';
import { ProductService } from '../../product.service';
import { Product } from '../../types/product';
import { Router } from '@angular/router';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, SearchProductComponent, AddProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  router = inject(Router);

  // consuming a service
  productService = inject(ProductService);

  ngOnInit(): void {
    this.productService.getProducts().subscribe((result) => {
      console.log(result);
      this.products = result as any[];
      this.filteredProducts = this.products;
    });
  }

  onBuyProduct(Name: string) {
    console.log('event triggered for', Name);
  }

  onViewProduct(product: Product) {
    console.log('View Emit', product);
    this.router.navigateByUrl('/product/' + product.id);
  }

  onSearchResult(searchText: string) {
    console.log('emit', searchText);
    if (searchText) {
      this.filteredProducts = this.products.filter(
        (prod) =>
          prod.Brand.toLowerCase().includes(searchText.toLowerCase()) ||
          prod.Name.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }
}
