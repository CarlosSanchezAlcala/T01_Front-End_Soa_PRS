import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {TeenService} from "@soa/teen/services/teen.service";
import {DashboardServicesService} from "@soa/dashboard-information-principal/services/dashboard-services.service";
import {Teen} from "@soa/teen/model/teen.model";

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

    initTransferForm() {
        this.transferDataForm = this._fb.group({
            id_teen: [''],
            id_operativeunit: [''],
        });
    }

    onSubmitForm() {
        if (this.transferDataForm.valid) {
            const idTeenSelectedForm = this.transferDataForm.get('id_teen')?.value;
            const idOperativeUnitSelectedForm = this.transferDataForm.get('id_operativeunit')?.value;

            const selectedTeen = this.teenDataForTransfer.find((item) => item.id_teen === idTeenSelectedForm);

            const teen: Teen = {
                id_teen: idTeenSelectedForm,
                name: selectedTeen.name,
                surnameFather: selectedTeen.surnameFather,
                surnameMother: selectedTeen.surnameMother,
                dni: selectedTeen.dni,
                phoneNumber: selectedTeen.phoneNumber,
                address: selectedTeen.address,
                email: selectedTeen.email,
                birthade: selectedTeen.birthade,
                gender: selectedTeen.gender,
                id_operativeunit: idOperativeUnitSelectedForm,
                crimeCommitted: selectedTeen.crimeCommitted,
                id_attorney: selectedTeen.id_attorney,
                codubi: selectedTeen.codubi,
                status: selectedTeen.status,
            };

            this._teenService.transferDataTeen(teen).subscribe((dataTransferTeen) => {
                console.log('Data transferida: ', dataTransferTeen);
                this.navigateToBackInformation();
            });

            this._teenService.saveNewTeen(teen).subscribe((dataSaveNewTeen) => {
                console.log('Data guardada: ', dataSaveNewTeen);
                this.navigateToBackInformation();
            });
        }
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

    getOperativeUnitFindBD(id_operativeunit: number) {
        const soa = this.soaDataForTransfer.find((item) => item.id_operativeunit === id_operativeunit);
        if (soa) {
            return `${soa.name}`
        } else {
            return 'El SOA no ha sido encontrado.'
        }
    }

    ngOnDestroy(): void {
    }
}
