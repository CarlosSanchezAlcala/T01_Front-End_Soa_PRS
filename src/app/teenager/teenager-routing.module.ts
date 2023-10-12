import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeTeenagerComponent } from './pages/home-teenager/home-teenager.component';

const routes: Routes = [
  {
    path: '',
    component: HomeTeenagerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeenagerRoutingModule { }
