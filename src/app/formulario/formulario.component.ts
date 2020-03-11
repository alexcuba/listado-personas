import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../personas.model';
import { servicesLogging } from '../services/serviceslogging';
import { PersonasServices } from '../services/personas.services';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  // @Output() personaCreada = new EventEmitter<Persona>();
  @Output() listaPersonas = new EventEmitter<Persona[]>();
  // nombreInput:string;
  // apellidosInput:string;
  @ViewChild('nombreInput',{static:false}) nombreInput: ElementRef;
  @ViewChild('apellidosInput',{static:false}) apellidosInput: ElementRef;  

  constructor(private serviceslogging: servicesLogging,
              private personasServices: PersonasServices) { }

  ngOnInit() {
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidosInput.nativeElement.value);
    this.serviceslogging.pringConsole("Este es el nombre: " + this.nombreInput.nativeElement.value + " " +this.apellidosInput.nativeElement.value); 
    // this.personaCreada.emit(persona1); 
    this.personasServices.agregarPersona(persona1);
  }

  onLimpiarCampos(nombreInput:HTMLInputElement, apellidosInput:HTMLInputElement){
      nombreInput.value = "";
      apellidosInput.value= "";
  }

  onRecetearLista(){
    let EmptyPersona : Persona[] = [];
    this.listaPersonas.emit(EmptyPersona);
  }

}
