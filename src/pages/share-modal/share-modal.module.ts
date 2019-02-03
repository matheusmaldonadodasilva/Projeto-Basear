import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareModal } from './share-modal';

@NgModule({
  declarations: [
    ShareModal,
  ],
  imports: [
    IonicPageModule.forChild(ShareModal),
  ],
  exports: [
    ShareModal
  ]
})
export class ShareModalPageModule {}
