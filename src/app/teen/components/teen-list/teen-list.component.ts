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

  teenColumns: string[] = ['name', 'surname', 'dni', 'phonenumber', 'address', 'email', 'birthade', 'gender', 'crime_committed', 'attorney', 'codubi', 'actions'];
  teenData: any[] = [];
  ubigeoData: any[] = [];

  constructor(public teenServices: TeenService,
              private router: Router,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.findAllDataActive();
    this.findAllDataUbigeo();
  }

  openDialog() {
    this.dialog.open(TeenFormComponent, {
      width: '800px',
      height: '600px'
    });
  }

  findAll() {
    this.teenServices.findAll().subscribe((dataTeen: any) => {
      console.log(dataTeen);
      // this.teenData = dataTeen; Data complete without "Active (A)"
    })
  }

  findAllDataActive() {
    this.teenServices.findAllDataActive().subscribe((dataTeenActive: any) => {
      console.log('Data Teen: ', dataTeenActive);
      this.teenData = dataTeenActive;
    })
  }

  findAllDataUbigeo() {
    this.teenServices.findAllDataUbigeoAddress().subscribe((dataFindUbigeoAddress: any) => {
      console.log('Data Ubigeo: ', dataFindUbigeoAddress);
      this.ubigeoData = dataFindUbigeoAddress;
    })
  }

  getUbigeoDataFindBD(codubi: string) {
    const ubication = this.ubigeoData.find(item => item.codubi === codubi);
    if (ubication) {
      return `${ubication.depar}-${ubication.provi}-${ubication.distri}`;
    } else {
      return 'Ubicación no determinada.'
    }
  }

  navigateToForm() {
    this.router.navigate(['adolescente/teen-form']).then(() => {
    })
  }

  updateDataTeen(teen: Teen) {
    this.teenServices.teenSelected = teen;
    this.navigateToForm();
    this.findAllDataActive();
  }

  deleteDataTeen(teen: Teen) {
    this.teenServices.deleteLogicalDataTeen(teen).subscribe((dataDeleteLogical) => {
      console.log('Se esta eliminando el dato de: ', dataDeleteLogical);
      this.findAllDataActive();
    })
  }
}
