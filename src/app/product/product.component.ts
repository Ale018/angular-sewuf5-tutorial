import { Component, Input } from '@angular/core';
import { Product, products } from '../products';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
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

  display: boolean = false;
  showDialog() {
    this.display = true;
  }

  constructor(private cartService: CartService){

  }
  addToCart(product: Product){ //Añade el producto actual al carrito
    this.cartService.addToCart(product);
    window.alert ('Su producto ha sido agregado al carrito')
  }

}
