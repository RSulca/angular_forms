import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  user = {
    nombre: null,
    apellido: null,
    email: null,
    pais: '',
    sexo: 'masculino',
    estado: false
  }

  pais = [{
    codigo: 'PE',
    nombre: 'Perú'
  },{
    codigo: 'CO',
    nombre: 'Colombia'
  },{
    codigo: 'BRA',
    nombre: 'Brasil'
  }];

  constructor() {
  }

  send(f: NgForm) {
    console.log(f);
    console.log(f.form.value);
    console.log(f.form.status);
    console.log(f.form.controls);
  }

}
