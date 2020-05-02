import { Component, OnInit, Input } from '@angular/core';
import { Persona } from '../../personas.model';
import { PersonasServices } from '../../services/personas.services';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() personas: Persona;
  @Input() indice: number;
  constructor(private personasservice: PersonasServices) { }

  ngOnInit() {
  
  }

  emitirSaludo(){
    this.personasservice.saludar.emit(this.indice);
  }
}
