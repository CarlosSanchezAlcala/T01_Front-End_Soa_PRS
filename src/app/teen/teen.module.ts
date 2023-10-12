import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";

import {TeenRoutingModule} from "@soa/teen/teen-routing.module";
import {HomeTeenPage} from "@soa/teen/pages";
import {TeenListComponent} from "@soa/teen/components/teen-list/teen-list.component";
import {TeenFormComponent} from "@soa/teen/components/teen-form/teen-form.component";

@NgModule({
  declarations: [HomeTeenPage, TeenListComponent, TeenFormComponent],
  imports: [CommonModule, TeenRoutingModule, MatTableModule, MatButtonModule, MatDialogModule, MatInputModule, ReactiveFormsModule, MatOptionModule, MatSelectModule],
})
export class TeenModule {}
