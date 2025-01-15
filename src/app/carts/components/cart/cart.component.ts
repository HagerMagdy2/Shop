import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartProducts: any[] = []
  total: any = 0;
  success:boolean = false;
  constructor(private router: Router, private cartsService:CartsService) { }
  ngOnInit(): void {
    this.getCartProducts();
  }
  getCartProducts() {
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      console.log(this.cartProducts)
    }

  }

  getTotalPrice() {
    this.total = 0;
    for (let product of this.cartProducts) {
      this.total += product.item.price * product.quantity
    }
    return this.total
  }
  minQuantity(index: number) {
    this.cartProducts[index].quantity--
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  addQuantity(index: number) {
    this.cartProducts[index].quantity++
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  DetectChange() {
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  DeleteProduct(index: number) {
    this.cartProducts.splice(index, 1)
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  ClearCart() {
    this.cartProducts = []
    localStorage.setItem("cart", JSON.stringify(this.cartProducts))
  }
  addCart() {
    let products = this.cartProducts.map(item=>{
      return {
        productId: item.item.id,
        quantity: item.quantity
      }
    })
    let Model = {
      userId: 5,
      date: new Date(),
      products:products
    }
    this.cartsService.createNewCart(Model).subscribe(res => {
    this.success = true;
    })
  
    console.log(Model)
  }
}
