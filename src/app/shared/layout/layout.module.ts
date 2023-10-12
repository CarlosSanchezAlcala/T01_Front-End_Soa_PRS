import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminContainerComponent } from '@soa/shared/layout/containers';
import { AdminHeaderComponent } from '@soa/shared/layout/headers';
import { AdminSidebarComponent } from '@soa/shared/layout/sidebar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  declarations: [
    AdminContainerComponent,
    AdminHeaderComponent,
    AdminSidebarComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatRippleModule,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    RouterOutlet
  ]
})
export class LayoutModule {
}
