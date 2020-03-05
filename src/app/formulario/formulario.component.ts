import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Persona } from '../personas.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() personaCreada = new EventEmitter<Persona>();
  @Output() listaPersonas = new EventEmitter<Persona[]>();

  // nombreInput:string;
  // apellidosInput:string;

  constructor() { }

  ngOnInit() {
  }

  onAgregarPersona(nombreInput:HTMLInputElement, apellidosInput:HTMLInputElement){
    let persona1 = new Persona(nombreInput.value, apellidosInput.value);
    this.personaCreada.emit(persona1);     
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
