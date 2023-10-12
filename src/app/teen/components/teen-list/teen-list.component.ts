import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
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
  teenDataForm: FormGroup = new FormGroup({});
  teenData: any[] = [];
  showForm = false;

  constructor(public teenServices: TeenService,
              private router: Router,
              private fb: FormBuilder,
              public dialog: MatDialog) {}

  ngOnInit(): void {
    this.findAllDataActive();
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
      this.teenData = dataTeen;
    })
  }

  findAllDataActive() {
    this.teenServices.findAllDataActive().subscribe((dataTeenActive: any) => {
      console.log('Estos son los datos en modo activos que se están recibiendo de la Base de Datos: ', dataTeenActive);
      this.teenData = dataTeenActive;
    })
  }

  navigateToForm() {
    this.router.navigate(['adolescente/teen-form']).then(() => {
      console.log('Se esta redirigiendo a la pestaña del formulario (Registro || Modificación de datos)')
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
