import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TeenService} from "@soa/teen/services/teen.service";
import {DashboardServicesService} from "@soa/dashboard-information-principal/services/dashboard-services.service";

@Component({
    selector: 'app-dashboard-form-transfer',
    templateUrl: './dashboard-form-transfer.component.html',
    styleUrls: ['./dashboard-form-transfer.component.scss']
})
export class DashboardFormTransferComponent implements OnInit, OnDestroy {

    transferDataForm: FormGroup = new FormGroup({});
    teenDataForTransfer: any[] = [];
    soaDataForTransfer: any[] = [];

    constructor(private _router: Router,
                private _teenService: TeenService,
                private _operativeUnit: DashboardServicesService,
                private _fb: FormBuilder) {
    }

    ngOnInit(): void {
        this.initTransferForm();
        this.findAllDataTeen();
        this.findAllDataSoa();
    }

    navigateToBackInformation() {
        this._router.navigate(['information/dashboard-screen-soa']).then(() => {
            // console.log('Se está redirigiendo a la pestaña de la información principal (Information Transfer (Principal))'); --------- // Running successfully
        })
    }

    findAllDataTeen() {
        this._teenService.findAllDataActive().subscribe((DataTeenTransfer: any) => {
            console.log('Datos obtenidos de Adolescentes: ', DataTeenTransfer);
            this.teenDataForTransfer = DataTeenTransfer;
        })
    }

    findAllDataSoa() {
        this._operativeUnit.findAllDataOperativeUnit().subscribe((DataSoaTransfer: any) => {
            console.log('Datos obtenidos de SOA: ', DataSoaTransfer);
            this.soaDataForTransfer = DataSoaTransfer;
        })
    }

    initTransferForm() {
        this.transferDataForm = this._fb.group({
            id_teen: [''],
            id_operativeunit: [''],
        });
    }

    ngOnDestroy(): void {
    }
}
