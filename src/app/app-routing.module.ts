import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminContainerComponent } from '@soa/shared/layout/containers';

const routes: Routes = [
  {
    path: '',
    component: AdminContainerComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'funcionary'
      },
      {
        path: 'funcionario',
        loadChildren: () => import('./funcionary/funcionary.module').then(m => m.FuncionaryModule)
      },
      {
        path: 'adolescente',
        loadChildren: () => import('./teen/teen.module').then(m => m.TeenModule)
      },
      {
        path: 'asignacion',
        loadChildren: () => import('./asignation/asignation.module').then(m => m.AsignationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
