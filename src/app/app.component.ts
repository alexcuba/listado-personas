import { Component } from '@angular/core';
import { Persona } from './personas.model';
import { PersonasServices } from './personas.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [];

  constructor(){

  }

  onPersonaAgregada(persona: Persona){
      this.personas.push(persona);
  }
  
  clearList(persona: Persona[]){
    persona = [];
    this.personas = persona;  
  }
}
