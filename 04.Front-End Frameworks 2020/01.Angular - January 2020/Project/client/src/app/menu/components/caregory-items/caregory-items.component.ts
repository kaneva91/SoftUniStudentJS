import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { IProduct } from 'src/app/shared/interfaces/product-interface';

@Component({
  selector: 'app-caregory-items',
  templateUrl: './caregory-items.component.html',
  styleUrls: ['./caregory-items.component.css']
})
export class CaregoryItemsComponent implements OnInit {

  category = this.router.url.split('/')[2];

  private data;

  get products(){
    return this.data;
  }



  constructor(private productService: ProductService,
              private userService : UserService,
    private router: Router) { }

  ngOnInit() {
    this.productService.getProducts(this.category).subscribe(response => this.data = response)
  }

  addToCartHandler(product : IProduct){

      if(this.userService.isLogged){
        this.userService.addToCart(product).subscribe(res => console.log(res))
      }
      else{
        this.router.navigate(['user/login'])
      }
    
  }

}
