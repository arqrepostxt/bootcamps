import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent {
  products = [...products];

  getProductImageReference(name: string): string {
    return name.toLowerCase().replace(/ /g, '-');
  }


}
