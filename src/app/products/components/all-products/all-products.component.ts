import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],

})
export class AllProductsComponent implements OnInit {
  products: any[] = [];
  categories: any[] = [];
  loading:boolean = false;
  cartProducts:any[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getProducts()
    this.getCategories()
  
  }
  getProducts() {
    this.loading = true;
    this.productService.getAllProducts().subscribe((res: any) => {
      this.loading = false; 
      this.products = res 
    //  console.log(this.products)
    }, error => {
      this.loading = false; 
      alert(error.message)
    })
  }
  getCategories(){
    this.loading=true
    this.productService.getAllCategories().subscribe((res: any) => {
      this.loading = false;
      this.categories = res
    //  console.log(this.categories)
    }, error => {
      this.loading = false;
    //  console.log(error.message)
    })
  }
getListByCatName(selectedCat:string){
  this.loading = true;  
  this.productService.getProductsByCategory(selectedCat).subscribe((res: any) => {
    this.loading = false;  
  this.products = res
//  console.log(this.products)
  }, error => {
    this.loading = false;  
    //console.log(error.message)
  })
}
filterCategory(event:any){
  let value=event.target.value
  console.log(value)
  if(value=='All'){
    this.getProducts()
  }else{
    this.getListByCatName(value)
  }  
}

addToCart(event:any){
  // JSON.stringify() //send
  // JSON.parse //resevre
if("cart" in localStorage){
  this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
  let exist = this.cartProducts.find(item => item.item.id == event.item.id )
  if(exist){
    alert("This Product is already in the cart")
  }else{
    this.cartProducts.push(event)
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))
  }

}else{
  this.cartProducts.push(event)
  localStorage.setItem("cart",JSON.stringify(this.cartProducts))
}
}
}
