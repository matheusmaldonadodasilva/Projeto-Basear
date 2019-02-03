import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListPage } from './list';
import { SharedPageModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListPage,
  ],
  imports: [
    SharedPageModule,
    IonicPageModule.forChild(ListPage),
  ],
})
export class ListPageModule {}
