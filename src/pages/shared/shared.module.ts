import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SharedPage } from './shared';
import { MainList } from './main-list/main-list';

@NgModule({
  declarations: [
    SharedPage,
    MainList
  ],
  imports: [
    IonicPageModule.forChild(SharedPage),
  ],
  exports: [
    SharedPage,
    MainList
  ]
})
export class SharedPageModule {}
