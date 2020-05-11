import { Component, OnInit } from '@angular/core';
import { Persona } from './personas.model';
import { PersonasServices } from './services/personas.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';

  constructor(){}

  ngOnInit(): void {
  }

  // onPersonaAgregada(persona: Persona){
  //   this.personasservices.agregarPersona(persona); 
  //   this.personas.push(persona);
  // }
  
  // clearList(persona: Persona[]){
  //   persona = [];
  //   this.personas = persona;  
  // }
}
