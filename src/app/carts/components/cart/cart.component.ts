import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cart:any[]=[]
  constructor(private router:Router){}
  onCheckoutClick() {
    alert('Checkout successful! Redirecting to home page...');
  this.router.navigate(['/']);
  }
   getTotalPrice(cart: any): number {
   //const total = cart.reduce((total, item) => total + item.price, 0);
  return Math.round(1 * 100) / 100;
  }
  RemoveFromCard(id:number){
     console.log(this.cart[id])
     this.cart.splice(id-1, 1);
  }
}
