import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeenagerRoutingModule } from './teenager-routing.module';
import { HomeTeenagerComponent } from './pages/home-teenager/home-teenager.component';


@NgModule({
  declarations: [
    HomeTeenagerComponent
  ],
  imports: [
    CommonModule,
    TeenagerRoutingModule
  ]
})
export class TeenagerModule { }
