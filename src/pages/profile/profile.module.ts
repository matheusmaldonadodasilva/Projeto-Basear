import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { SharedPageModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    SharedPageModule,
    IonicPageModule.forChild(ProfilePage),
  ],
})
export class ProfilePageModule {}
