import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product-reactive-form',
  standalone: true,
  imports: [
    MatButton,
    MatButtonModule,
    MatInput,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './add-product-reactive-form.component.html',
  styleUrl: './add-product-reactive-form.component.css',
})
export class AddProductReactiveFormComponent implements OnInit {
  productService = inject(ProductService);

  formBuilder = inject(FormBuilder);
  productForm!: FormGroup;

  router = inject(Router);

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      id: '',
      Name: '',
      Brand: '',
      Cost: '',
      img: '',
      description: '',
    });
  }

  handleSubmit() {
    console.log('submit logged');
    this.productService
      .addProduct(this.productForm.value)
      .subscribe((response) => {
        console.log(response);
      });
    alert('Product added successfully');
    this.router.navigateByUrl('/');
  }
}
