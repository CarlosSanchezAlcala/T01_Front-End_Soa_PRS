import {Component, OnInit} from '@angular/core';
import {TeenService} from "@soa/teen/services/teen.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {TeenFormComponent} from "@soa/teen/components/teen-form/teen-form.component";
import {Teen} from "@soa/teen/model/teen.model";

@Component({
  selector: 'app-teen-list-inactive',
  templateUrl: './teen-list-inactive.component.html',
  styleUrls: ['./teen-list-inactive.component.scss']
})
export class TeenListInactiveComponent implements OnInit {

  teenColumns: string[] = ['name', 'surname', 'dni', 'phonenumber', 'address', 'email', 'birthade', 'gender', 'crime_committed', 'attorney', 'codubi', 'actions'];
  teenData: any[] = [];
  ubigeoData: any[] = [];
  attorneyData: any[] = [];

  constructor(public teenServices: TeenService,
              private router: Router,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.findAllDataInactive();
    this.findAllDataUbigeo();
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

  findAllDataInactive() {
    this.teenServices.findAllDataInactive().subscribe((dataTeenInactive: any) => {
      // console.log('Data Teen: ', dataTeenInactive);  --------- // Running successfully
      this.teenData = dataTeenInactive;
    })
  }

  findAllDataUbigeo() {
    this.teenServices.findAllDataUbigeoAddress().subscribe((dataFindUbigeoAddress: any) => {
      // console.log('Data Ubigeo: ', dataFindUbigeoAddress); --------- // Running successfully
      this.ubigeoData = dataFindUbigeoAddress;
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

  getUbigeoDataFindBD(codubi: string) {
    const ubication = this.ubigeoData.find((item) => item.codubi === codubi);
    if (ubication) {
      return `${ubication.depar} - ${ubication.provi} - ${ubication.distri}`;
    } else {
      return 'Ubicación no determinada.'
    }
  }

  navigateToList() {
    this.router.navigate(['adolescente/teen-list']).then(() => {
    })
  }

  updateDataTeen(teen: Teen) {
    this.teenServices.teenSelected = teen;
    this.navigateToList();
    this.findAllDataInactive();
  }

  reactiveDataTeen(teen: Teen) {
    this.teenServices.reactiveLogicalDataTeen(teen).subscribe((dataReactiveTeen) => {
      // console.log('Se esta eliminando el dato de: ', dataReactiveTeen); --------- // Running successfully
      this.findAllDataInactive();
    })
  }
}
