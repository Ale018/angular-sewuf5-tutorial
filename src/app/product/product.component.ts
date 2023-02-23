import { Component, Input } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() producto!: Product;


  productos = products;

  compartir() {
    window.alert('El producto ha sido compartido!');
  }

  onNotify() {
    window.alert('Usted será notificado cuando el producto sale a la venta');
  }
}
