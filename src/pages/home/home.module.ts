import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { SharedPageModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    SharedPageModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
