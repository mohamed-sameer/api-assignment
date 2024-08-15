import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/products.service';
import { IProduct } from '../../interfaces/iproduct';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  constructor(private _Products: ProductsService) {}

  products: IProduct[] = [];

  ngOnInit(): void {
    this._Products.getProducs().subscribe({
      next: (res) => {
        console.log(res);
        this.products = res;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
