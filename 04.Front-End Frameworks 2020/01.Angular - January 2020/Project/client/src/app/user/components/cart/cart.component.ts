import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private cartItems = null;
  private countItems: number;
  private totalSum : number ;

  get cart() {
    return this.cartItems;
  }

  get count() {
    return this.countItems
  }

  get total() {
    return this.totalSum === undefined ? 0 : this.totalSum.toFixed(2) ;
  }

  constructor(private userService: UserService,
   private toasterService: ToastrService
    ) { }

  ngOnInit() {
    this.userService.getCartItems().subscribe(
      response => {
       this.cartItems = response.length=== 0 ? null: response;
        this.countItems =  response.length
        this.totalSum = this.cartItems === null ? 0 : this.cartItems .map(item => item.price).reduce((a, b) => +a + +b, 0)
      })
  }

  checkOutHandler() {
    this.userService.checkOut().subscribe(() => {
      this.cartItems = null;
      this.countItems = 0;
      this.totalSum= 0;
      this.toasterService.success('Check out susseedded!!!')
     // alert('Check out susseedded!!!')
    })
  }


}
