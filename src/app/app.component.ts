import { Component } from '@angular/core';
import { Persona } from './personas.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [new Persona("Juan","Perez"), new Persona("Laura","Juarez")];

  nombreInput:string;
  apellidosInput:string;
   
  onAgregarPersona(){
    let persona1 = new Persona(this.nombreInput, this.apellidosInput);
    this.personas.push(persona1); 
  }
}
