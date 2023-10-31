import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardInformationPrincipalRoutingModule } from './dashboard-information-principal-routing.module';
import { DashboardScreenSoaComponent } from './components/dashboard-screen-soa/dashboard-screen-soa.component';
import { DashboardInformationPrincipalComponent } from "@soa/dashboard-information-principal/pages/home-dashboard-information-principal/dashboard-information-principal.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import { DashboardFormTransferComponent } from './components/dashboard-form-transfer/dashboard-form-transfer.component';
import {MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    DashboardInformationPrincipalComponent,
    DashboardScreenSoaComponent,
    DashboardFormTransferComponent
  ],
  imports: [
    CommonModule,
    DashboardInformationPrincipalRoutingModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class DashboardInformationPrincipalModule { }
