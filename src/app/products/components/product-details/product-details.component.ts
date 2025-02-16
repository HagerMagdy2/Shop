import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  id!:any;
  product:any;
  loading:boolean = false;
constructor(private activatedRoute:ActivatedRoute, private productService:ProductService){
this.id = this.activatedRoute.snapshot.paramMap.get('id');
}
  ngOnInit(): void {
  this.getProductDetails()
  }
getProductDetails(){
  this.loading=true
  this.productService.getProductById(this.id).subscribe((res:any) => {
    this.product = res;
    this.loading=false;
    console.log(this.product);
  }, error => {
    this.loading=false;
    console.log(error);
  });
}
}
