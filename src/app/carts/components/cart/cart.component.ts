import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartProducts:any[]=[]
  
  constructor(private router:Router){}
  ngOnInit(): void {
    this.getCartProducts();
  }
getCartProducts(){
  if("cart" in localStorage){
  this.cartProducts=  JSON.parse(localStorage.getItem("cart")!)
  console.log(this.cartProducts)
  }
}
}
