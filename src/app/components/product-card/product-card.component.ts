import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { HomeComponent } from '../home/home.component';
import { Product } from '../../types/product';
import { UpperCasePipe } from '@angular/common';
import { RupeePipe } from '../../pipes/rupee.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipsModule,
    HomeComponent,
    UpperCasePipe,
    RupeePipe,
  ],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() item!: Product;
  @Output() buyProduct = new EventEmitter<string>();
  @Output() viewProduct = new EventEmitter<Product>();

  handleBuy(product: Product) {
    console.log('Buy Button clicked!', product);
    this.buyProduct.emit(product.Name);
  }

  handleView(product: Product) {
    this.viewProduct.emit(product);
  }
}
