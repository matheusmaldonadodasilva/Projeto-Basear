import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Filter } from './filter';

@NgModule({
  declarations: [
    Filter,
  ],
  imports: [
    IonicPageModule.forChild(Filter),
  ],
})
export class FilterPageModule {}
