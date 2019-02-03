import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Slides, Content } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  @ViewChild('pageSlider') pageSlider: Slides;
  @ViewChild('mySlider') slider: Slides;
  @ViewChild(Content) content: Content;
  slides: any;
  tabs: any = '0';

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {}
  // for tab to nextslide
    selectTab(index) {
      this.pageSlider.slideTo(index);
      this.content.scrollToTop();
    }
  // for changeWillSlide
    changeWillSlide($event) {
      this.tabs = $event._snapIndex.toString();
      setTimeout(()=>{
        this.content.scrollToTop();
      },200)
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
