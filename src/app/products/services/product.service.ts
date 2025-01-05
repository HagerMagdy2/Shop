import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products')
  }
  getAllCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories')
  }
  getProductsByCategory(_selectedCategory: string) {
    return this.http.get('https://fakestoreapi.com/products/category/'+ _selectedCategory)
  }
  getProductById(id:any) {
    return this.http.get('https://fakestoreapi.com/products/'+id)
  }
}