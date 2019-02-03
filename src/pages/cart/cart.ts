import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class Cart {
  cartList: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.cartList=[{id: 1, img: 'assets/img/cart-img.png', name: 'Checked Shirt', size: 'XXL', price: '50.00'},{id: 2, img: 'assets/img/cart-img.png', name: 'Checked Shirt', size: 'XXL', price: '50.00'}]
  }

  dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }
// remove product qty
  removeItem(item){
    for(var i = 0; i < this.cartList.length; i++) {
      if(this.cartList[i] == item){
        this.cartList.splice(i, 1);
      }
    }
  }

}