import { Component, ViewChild, Renderer, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, Content, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  @ViewChild('pageSlider') pageSlider: Slides;
  @ViewChild('mySlider') slider: Slides;
  @ViewChild(Content) content: Content;
  slides: any;
  tabs: any = '0';

  header: any;
  headerHeight: any;
  translateAmt: any;
  darkHeader: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer ,public zone :NgZone, public modalCtrl: ModalController) {}
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

// scroll transition
  ngAfterViewInit() {     
    var length=document.getElementsByClassName("myHeader").length -1;
    this.header = document.getElementsByClassName("myHeader")[length];
    // var lengthToolbar=document.getElementsByClassName("toolbar-background-md").length -1;
    // this.headerHeight = this.header.clientHeight;
  }
  scrollingFun(ev){
    ev.domWrite(() => {
        this.updateHeader(ev);
      //
    }); 
  }

  updateHeader(ev) { 
    if (ev.scrollTop >= 0) {
      this.translateAmt = -ev.scrollTop / 2;
      if(this.translateAmt<-210){
        this.translateAmt=-210;
      }
    }
    if (ev.scrollTop >= 250){
      this.renderer.setElementClass(this.header, 'userInfo', true);
    }else this.renderer.setElementClass(this.header, 'userInfo', false);

    
  this.zone.run(() => {
    this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0)');
    });
  }

  presentCartModal() {
    let modal = this.modalCtrl.create('Cart');
    modal.present();
  }  

}