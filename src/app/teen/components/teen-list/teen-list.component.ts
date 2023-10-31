import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {Teen} from "@soa/teen/model/teen.model";
import {TeenFormComponent} from "@soa/teen/components/teen-form/teen-form.component";
import {TeenService} from "@soa/teen/services/teen.service";

@Component({
  selector: 'app-teen-list',
  templateUrl: './teen-list.component.html',
  styleUrls: ['./teen-list.component.scss'],
})
export class TeenListComponent implements OnInit {

  teenColumns: string[] = ['name', 'surname', 'dni', 'phonenumber', 'address', 'email', 'birthade', 'gender', 'soaInformation', 'crime_committed', 'attorney', 'codubi', 'actions'];
  teenData: any[] = [];
  ubigeoData: any[] = [];
  soaInformationData: any[] = [];
  attorneyData: any[] = [];

  constructor(public teenServices: TeenService,
              private router: Router,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.findAllDataActive();
    this.findAllDataUbigeo();
    this.findAllDataSoaInformation();
    this.findAllDataAttorney();
  }

  openDialog() {
    this.dialog.open(TeenFormComponent, {
      width: '800px',
      height: '600px'
    });
  }

  getConfirmationGenderSexTeen(confirmation: string) {
    return confirmation === 'M' ? 'Masculino' : 'Femenino';
  }

  findAll() {
    this.teenServices.findAll().subscribe((dataTeen: any) => {
      console.log(dataTeen);
      // this.teenData = dataTeen; Data complete without "Active (A)"
    })
  }

  findAllDataActive() {
    this.teenServices.findAllDataActive().subscribe((dataTeenActive: any) => {
      // console.log('Data Teen: ', dataTeenActive);  --------- // Running successfully
      this.teenData = dataTeenActive;
    })
  }

  findAllDataUbigeo() {
    this.teenServices.findAllDataUbigeoAddress().subscribe((dataFindUbigeoAddress: any) => {
      // console.log('Data Ubigeo: ', dataFindUbigeoAddress); --------- // Running successfully
      this.ubigeoData = dataFindUbigeoAddress;
    })
  }

  findAllDataSoaInformation() {
    this.teenServices.findAllDataSoaInformation().subscribe((dataSoaInformation: any) => {
      // console.log('Data Soa: ', dataSoaInformation); --------- // Running successfully
      this.soaInformationData = dataSoaInformation;
    })
  }

  findAllDataAttorney() {
    this.teenServices.findAllDataAttorney().subscribe((dataFindAttorney: any) => {
      // console.log('Data Attorney: ', dataFindAttorney); //--------- // Running successfully
      this.attorneyData = dataFindAttorney;
    })
  }

  getAttorneyFindBD(id_attorney: number) {
    const attorney = this.attorneyData.find((item) => item.id_attorney === id_attorney);
    if (attorney) {
      return `${attorney.name} ${attorney.surnamefather} ${attorney.surnamemother}`;
    } else {
      return 'Apoderado no determinado.'
    }
  }

  getSoaFindBD(id_operativeunit: number) {
    const soa = this.soaInformationData.find((item) => item.id_operativeunit === id_operativeunit);
    if (soa) {
      return `${soa.name}`;
    } else {
      return 'El SOA no ha sido encontrado.'
    }
  }

  getUbigeoDataFindBD(codubi: string) {
    const ubication = this.ubigeoData.find((item) => item.codubi === codubi);
    if (ubication) {
      return `${ubication.depar} - ${ubication.provi} - ${ubication.distri}`;
    } else {
      return 'Ubicación no determinada.'
    }
  }

  navigateToForm() {
    this.router.navigate(['adolescente/teen-form']).then(() => {
    })
  }

  navigateToListInactive() {
    this.router.navigate(['adolescente/teen-list-inactive']).then(() => {
    })
  }

  updateDataTeen(teen: Teen) {
    this.teenServices.teenSelected = teen;
    this.navigateToForm();
    this.findAllDataActive();
  }

  deleteDataTeen(teen: Teen) {
    this.teenServices.deleteLogicalDataTeen(teen).subscribe((dataDeleteLogical) => {
      // console.log('Se esta eliminando el dato de: ', dataDeleteLogical); --------- // Running successfully
      this.findAllDataActive();
    })
  }
}
