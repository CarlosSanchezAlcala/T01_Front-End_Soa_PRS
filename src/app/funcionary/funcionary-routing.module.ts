import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeFuncionaryPage } from '@soa/funcionary/pages';
import {FuncionaryFormComponent} from "@soa/funcionary/components/funcionary-form/funcionary-form.component";
import {FuncionaryListComponent} from "@soa/funcionary/components/funcionary-list/funcionary-list.component";
import {
  FuncionaryInactiveComponent
} from "@soa/funcionary/components/funcionary-inactive/funcionary-inactive.component";

const routes: Routes = [
  {
    path: '',
    component: HomeFuncionaryPage
  },
  {
    path: 'funcionary-form',
    component: FuncionaryFormComponent
  },
  {
    path: 'funcionary-list',
    component: FuncionaryListComponent
  },
  {
    path: 'funcionary-inactive',
    component: FuncionaryInactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionaryRoutingModule { }
