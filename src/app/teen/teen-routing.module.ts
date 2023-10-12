import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeTeenPage} from "@soa/teen/pages";
import {TeenFormComponent} from "@soa/teen/components/teen-form/teen-form.component";
import {TeenListComponent} from "@soa/teen/components/teen-list/teen-list.component";

const routes: Routes = [
  {
    path: '',
    component: HomeTeenPage
  },
  {
    path: 'teen-form',
    component: TeenFormComponent
  },
  {
    path: 'teen-list',
    component: TeenListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeenRoutingModule { }
