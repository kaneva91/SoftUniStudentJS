import { Component, OnInit} from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { IProduct } from 'src/app/shared/interfaces/product-interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  private cartItems = null;

  get cart(){
      return this.cartItems;
  }

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.userService.getCartItems().subscribe(
   
      response =>{ this.cartItems = response;
        console.log(response)
      }
    )
  }
}
