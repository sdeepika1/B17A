import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList : any;
  public itemId:any;

  constructor(
    private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.productList = res;

      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
  }

  addtocart(item : any){
    this.cartService.addtoCart(item).subscribe(res =>{
      alert("Item added to cart")
    });
  }

}
