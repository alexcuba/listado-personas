import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('nombreInput',{static:false}) nombreInput: ElementRef;
  @ViewChild('apellidosInput',{static:false}) apellidosInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput.nativeElement.value, this.apellidosInput.nativeElement.value);
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
