import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeAsignationComponent} from "@soa/asignation/pages";
import {AsignationListComponent} from "@soa/asignation/components/asignation-list/asignation-list.component";
import {AsignationFormComponent} from "@soa/asignation/components/asignation-form/asignation-form.component";

const routes: Routes = [
  {
    path: '',
    component: HomeAsignationComponent,
  },
  {
    path: 'asignation-list',
    component: AsignationListComponent,
  },
  {
    path: 'asignation-form',
    component: AsignationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignationRoutingModule { }
