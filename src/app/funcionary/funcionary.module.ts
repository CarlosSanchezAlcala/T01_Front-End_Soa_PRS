import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';

import { FuncionaryRoutingModule } from './funcionary-routing.module';
import { HomeFuncionaryPage } from '@soa/funcionary/pages';
import { FuncionaryListComponent } from './components/funcionary-list/funcionary-list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { FuncionaryFormComponent } from './components/funcionary-form/funcionary-form.component';
import { FuncionaryInactiveComponent } from './components/funcionary-inactive/funcionary-inactive.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [HomeFuncionaryPage, FuncionaryListComponent, FuncionaryFormComponent, FuncionaryInactiveComponent],
    imports: [CommonModule, FuncionaryRoutingModule, MatTableModule, MatButtonModule, MatDialogModule, MatInputModule, ReactiveFormsModule, MatOptionModule, MatSelectModule, MatExpansionModule, MatIconModule],
})
export class FuncionaryModule {}
