import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../../personas.model';
import { servicesLogging } from '../../services/serviceslogging';
import { PersonasServices } from '../../services/personas.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  nombreInput:string;
  apellidosInput:string;

  constructor(private personasservices: PersonasServices,
              private router: Router) {
              this.personasservices.saludar.subscribe(
                (indice: number) => alert(`El indice es: ${indice}`)
              );
   }

  ngOnInit() {
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidosInput); 
    this.personasservices.agregarPersona(persona1);
    this.nombreInput = "";
    this.apellidosInput = "";
    this.router.navigate(['personas']);
  }

}
