import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class Filter {
  colors: Array<any>;
  dualValue2={ "lower": 255, "upper": 755};
  selectColor: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.colors=[{color: '#ffffff'},{color: '#000000'},{color: '#00457c'},{color: '#00a6dd'},{color: '#679146'},{color: '#f58026'},{color: '#fcea0d'},{color: '#662482'},{color: '#9fa374'},{color: '#58585a'},{color: '#c7d6ee'},{color: '#820024'}]
  }

  dismiss() {
   let data = { 'foo': 'bar' };
   this.viewCtrl.dismiss(data);
 }

 activeColor(index){
   this.selectColor = index;
 }
}