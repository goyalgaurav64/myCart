import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconAnchor } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-product',
  standalone: true,
  imports: [
    MatFormField,
    MatIconAnchor,
    MatIconModule,
    FormsModule,
    MatLabel,
    MatInputModule,
    MatButtonModule,
    RouterLink,
  ],
  templateUrl: './search-product.component.html',
  styleUrl: './search-product.component.css',
})
export class SearchProductComponent {
  value: string = '';

  @Output() searchResult = new EventEmitter<string>();

  handleSearch() {
    console.log('Searhed text ', this.value);
    this.searchResult.emit(this.value);
  }
}
