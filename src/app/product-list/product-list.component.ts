import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  productos = products;

  compartir() {
    window.alert('El producto ha sido compartido!');
  }

  onNotify() {
    window.alert('Usted será notificado cuando el producto sale a la venta');
  }
}
