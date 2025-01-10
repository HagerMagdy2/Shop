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
   getTotalPrice(card: any): number {
  //  const total = card.reduce((total, item) => total + item.price, 0);
  return Math.round(1 * 100) / 100;
  }
  RemoveFromCard(id:number){
    // console.log(this.card[id])
    // this.card.splice(id-1, 1);
  }
}
