import { Component, Renderer, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Content } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  headerbg: any;
  darkHeader: any;
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public renderer: Renderer, public zone :NgZone) {
  }

  ngAfterViewInit() {     
  var length=document.getElementsByClassName("header_home").length -1;
  this.headerbg = document.getElementsByClassName("header_home")[length];
 }
 scrollingFun(ev){
     ev.domWrite(() => {
         this.updateHeader(ev);
     }); 
 }
 updateHeader(ev) { 
 if (ev.scrollTop > 0) {
     this.darkHeader = ev.scrollTop / 200;
     this.renderer.setElementClass(this.headerbg, 'sub-header', true);  
   }else  this.renderer.setElementClass(this.headerbg, 'sub-header', false);
 } 

  presentFilterModal() {
    let modal = this.modalCtrl.create('Filter');
    modal.present();
  }

  presentCartModal() {
    let modal = this.modalCtrl.create('Cart');
    modal.present();
  }

}
