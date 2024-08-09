import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Product } from '../../types/product';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  productService = inject(ProductService);
  router = inject(Router);

  product: Product = {
    Name: '',
    Brand: '',
    Cost: '',
    img: '',
    description: '',
  };

  handleAddSubmit() {
    this.productService.addProduct(this.product).subscribe((response) => {
      alert('Successfully saved');
      this.router.navigateByUrl('/');
    });
    console.log('submit triggered');
  }
}
