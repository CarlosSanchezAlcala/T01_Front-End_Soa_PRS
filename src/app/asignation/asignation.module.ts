import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsignationRoutingModule } from './asignation-routing.module';
import { HomeAsignationComponent } from '@soa/asignation/pages';
import { AsignationListComponent } from './components/asignation-list/asignation-list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import { AsignationFormComponent } from './components/asignation-form/asignation-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [
    HomeAsignationComponent,
    AsignationListComponent,
    AsignationFormComponent
  ],
  imports: [
    CommonModule,
    AsignationRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule
  ]
})
export class AsignationModule { }
