import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardInformationPrincipalComponent } from "@soa/dashboard-information-principal/pages/home-dashboard-information-principal/dashboard-information-principal.component";
import { DashboardScreenSoaComponent } from "@soa/dashboard-information-principal/components/dashboard-screen-soa/dashboard-screen-soa.component";
import {
  DashboardFormTransferComponent
} from "@soa/dashboard-information-principal/components/dashboard-form-transfer/dashboard-form-transfer.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardInformationPrincipalComponent
  },
  {
    path: 'dashboard-screen-soa',
    component: DashboardScreenSoaComponent
  },
  {
    path: 'dashboard-form-transfer',
    component: DashboardFormTransferComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardInformationPrincipalRoutingModule { }
