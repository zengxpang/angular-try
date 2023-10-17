import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from "../cart.service";
import {IProduct} from "../products";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(private cartService:CartService,private formBuilder:FormBuilder) {}

  items:IProduct[] = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  handleSubmit():void{
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted',this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
