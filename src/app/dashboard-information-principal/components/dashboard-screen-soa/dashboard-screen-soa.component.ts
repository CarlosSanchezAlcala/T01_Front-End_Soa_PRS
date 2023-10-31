import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dashboard-screen-soa',
  templateUrl: './dashboard-screen-soa.component.html',
  styleUrls: ['./dashboard-screen-soa.component.scss']
})
export class DashboardScreenSoaComponent implements OnInit, OnDestroy {

  viewValidationTransfer = false;

  constructor(private _router: Router) {
  }

  ngOnInit(): void {
  }

  navigateToFormTransfer() {
    this._router.navigate(['information/dashboard-form-transfer']).then(() => {
      // console.log('Se está redirigiendo a la pestaña del formulario (Transferencia de Adolescentes)'); --------- // Running successfully
    })
  }

  ngOnDestroy(): void {
  }
}
