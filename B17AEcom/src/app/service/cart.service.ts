import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  url="https://bookcart.azurewebsites.net/api/shoppingcart/addToCart/477"
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([])
  public userId:number=477;

  constructor(private http : HttpClient) { }

  getProducts(){
    return this.productList.asObservable();
  }


  getProduct(){
    return this.http.get('https://bookcart.azurewebsites.net/api/book')
  }
  
  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addtoCart(bookId : any){
    let header = new HttpHeaders().set(
      "Authorization","Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJEZWVwczEiLCJ1c2VyaWQiOiI0NzciLCJ1c2VyVHlwZUlkIjoiMiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IjIiLCJqdGkiOiIzZWVjYWE3MC0xNWZjLTQ5MmUtYTI0ZC1iNzU5YzM2MzNjMWMiLCJleHAiOjE2NDI3NzgyNTIsImlzcyI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzY0LyJ9.v5eJhSwvFO2iS3EfDvDQIdiyPpp8noszL_-uVU-F0vY"     
    );
   return this.http.post(`${this.url}/${bookId}`,{headers:header})
  }


  getTotalPrice() : number{
    let cartTotal = 0;
    this.cartItemList.map((a:any)=>{
      cartTotal += a.total;
    })
    return cartTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id=== a.id){
        this.cartItemList.splice(index,1)
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
