import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { NombreService } from '../../services/nombre.service'


@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css']
})
export class DataComponent {

    forma: FormGroup;
    user: any = {
        nombreCompleto: {
            nombre: 'Raul',
            apellido: 'Sulca Palacios'
        },
        correo: 'raul@com.pe',
        username: '',
        password1: '',
        password2: ''
    }

    constructor(private _name: NombreService) {

        this.forma = new FormGroup({
            'nombreCompleto': new FormGroup({
                'nombre': new FormControl('', [Validators.required, Validators.minLength(3), this.especial]),
                'apellido': new FormControl('', [Validators.required, Validators.minLength(5)])
            }),
            'correo': new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
            'username': new FormControl('', Validators.required, this.readUser.bind(this._name)),
            'password1': new FormControl('', Validators.required),
            'password2': new FormControl()
        });
        this.forma.setValue(this.user);
        this.forma.controls['password2'].setValidators([Validators.required, this.igual.bind(this.forma)]);
        this.forma.valueChanges.subscribe(data => {
            console.log(data.correo)
        });
    }

    especial(ctrl: FormControl): { [s: string]: boolean } {
        if (ctrl.value === 'gaa') {
            return { especial: true }
        } else {
            return null;
        }
    }


    igual(ctrl: FormControl): { [s: string]: boolean } {
        let form: any = this;
        if (ctrl.value !== form.controls['password1'].value) {
            return { igual: true }
        } else {
            return null;
        }
    }


    send() {
        console.log(this.forma);
        console.log(this.forma.controls);
        this.forma.reset({
            nombreCompleto: {
                nombre: '',
                apellido: ''
            },
            correo: '',
            username: '',
            password1: '',
            password2: ''
        });

    }

    readUser(ctrl: FormControl): Promise<any> | Observable<any> {
        let promesa = new Promise((resolve, reject) => {
            let nombres: any = this;
            for (let name of nombres.info) {
                if (ctrl.value === name.username) {
                    resolve({ read: true })
                }
            }
            resolve(null)
        })
        return promesa;
    }

}
