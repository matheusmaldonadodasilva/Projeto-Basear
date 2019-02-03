import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<any>;
  shownGroup: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public menuCtrl: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages =[
    {title: 'Home', icon:'md-home', component: 'HomePage'},
    {title: 'Account', icon:'md-contact', component: 'ProfilePage'},
    {title: 'settings', icon:'settings', component: 'SettingPage'},
    {title: 'Clothings', icon:'md-shirt', dropIcon:'ios-arrow-down', details:[{title:'Shirt',component: 'ListPage'}, {title:'t-Shirt',component: 'ListPage'}] },
    {title: 'Sports', icon:'ios-football', dropIcon:'ios-arrow-down', details:[{title:'football',component: 'ListPage'},{title:'basketball',component: 'ListPage'}]},
    {title: 'Shoes', icon:'md-list', dropIcon:'ios-arrow-down', details:[{title:'men',component: 'ListPage'}, {title:'woman',component: 'ListPage'}]},
    {title: 'bags & accessory', icon:'md-briefcase', dropIcon:'ios-arrow-down', details:[{title:'men',component: 'ListPage'}, {title:'woman',component: 'ListPage'}]}]

  }

  isGroupShown(group) {
    return  this.shownGroup === group;
  };

  toggleDetails(group) {

    if(group.details){

      if (this.isGroupShown(group)) {
          if(this.shownGroup) this.shownGroup.dropIcon = 'ios-arrow-up';
          this.shownGroup = null;
          group.dropIcon = 'ios-arrow-down';
      } else{
          if(this.shownGroup) this.shownGroup.dropIcon = 'ios-arrow-down';
          this.shownGroup = group;
          group.dropIcon = 'ios-arrow-up';
      }
      
    }else{
      this.menuCtrl.close();
      this.openPage(group)
    }

  }  

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  goTo(page) {
    this.nav.setRoot(page);
  }
}
