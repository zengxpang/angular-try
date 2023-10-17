import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products,IProduct } from '../products';
import { CartService } from "../cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute,private cartService:CartService) {}

  ngOnInit() {
    // First get the product id from the current route.
    // 从当前路由获取产品id。
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    // 找到与路由中提供的id对应的产品。
    this.product = products.find(product => product.id === productIdFromRoute);
  }

  addToCart(product:IProduct){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}
