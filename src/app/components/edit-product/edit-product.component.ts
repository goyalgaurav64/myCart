import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-product',
  standalone: true,
  imports: [
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatFormField,
    ReactiveFormsModule,
  ],
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css',
})
export class EditProductComponent implements OnInit {
  //productService api
  productService = inject(ProductService);

  //route
  route = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  // form
  formBuilder = inject(FormBuilder);
  productForm!: FormGroup;

  // toastr
  toastrService = inject(ToastrService);

  constructor() {
    this.productForm = this.formBuilder.group({
      id: [''],
      Name: [''],
      Brand: [''],
      description: [''],
      Cost: [''],
      img: [''],
    });
  }

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.params['id'];
    this.productService.getProductById(productId).subscribe((result) => {
      this.productForm.patchValue(result);
      //console.log(this.productForm.patchValue(result));
    });
  }

  handleEditSubmit() {
    console.log('Edit submit logged', this.productForm.value);
    this.productService
      .updateProduct(this.productForm.value)
      .subscribe((result) => {
        console.log(result);
        this.toastrService.success('Product Updated Successfully!');
        this.route.navigateByUrl('/');
      });
  }
}
