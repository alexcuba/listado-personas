import { Component, OnInit } from '@angular/core';
import { Persona } from '../personas.model';
import { PersonasServices } from '../services/personas.services';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[] = [];
  constructor(private personasservices: PersonasServices) { }

  ngOnInit() {
    this.personas  = this.personasservices.personas;
  }

}
