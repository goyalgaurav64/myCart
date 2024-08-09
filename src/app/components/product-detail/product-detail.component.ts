import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatButtonModule, MatButton],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  productService = inject(ProductService);
  activatedRoute = inject(ActivatedRoute);
  route = inject(Router);

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(productId).subscribe((result) => {
      this.product = result;
    });
  }

  handleEdit() {
    this.route.navigateByUrl('/edit-product/' + this.product.id);
  }
}
