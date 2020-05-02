import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../../personas.model';
import { servicesLogging } from '../../services/serviceslogging';
import { PersonasServices } from '../../services/personas.services';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  // @Output() personaCreada = new EventEmitter<Persona>();
  // @Output() listaPersonas = new EventEmitter<Persona[]>();
  nombreInput:string;
  apellidosInput:string;
  // @ViewChild('nombreInput',{static:false}) nombreInput: ElementRef;
  // @ViewChild('apellidosInput',{static:false}) apellidosInput: ElementRef;  

  constructor(private personasservices: PersonasServices) {
              this.personasservices.saludar.subscribe(
                (indice: number) => alert(`El indice es: ${indice}`)
              );
   }

  ngOnInit() {
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidosInput);
    // this.serviceslogging.pringConsole("Este es el nombre: " + this.nombreInput.nativeElement.value + " " +this.apellidosInput.nativeElement.value); 
    // this.personaCreada.emit(persona1); 
    this.personasservices.agregarPersona(persona1);
    this.nombreInput = "";
    this.apellidosInput = "";
  }

  onLimpiarCampos(nombreInput:HTMLInputElement, apellidosInput:HTMLInputElement){
      nombreInput.value = "";
      apellidosInput.value= "";
  }

  onRecetearLista(){
    // let EmptyPersona : Persona[] = [];
    this.personasservices.borrarTodasPersonas();
    // this.listaPersonas.emit(EmptyPersona);
  }

}
