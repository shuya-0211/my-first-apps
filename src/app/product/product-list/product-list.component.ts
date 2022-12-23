import { Component, OnInit } from '@angular/core';
import { products } from '../../products';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any 

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();

  }
}

