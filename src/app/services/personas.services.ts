import { Persona } from '../personas.model';
import { servicesLogging } from '../services/serviceslogging';
import { Injectable, EventEmitter, OnInit } from '@angular/core';

@Injectable()
export class PersonasServices {
    personas: Persona[] = [new Persona("Alexander","Valdes"), new Persona("Susana","valdes")];

    saludar = new EventEmitter<number>();

    constructor(private servicelogging: servicesLogging){}

    agregarPersona(persona: Persona){
        this.servicelogging.pringConsole(`El nombre de la persona agregada es: ${persona.nombre} ${persona.apellidos}`);
        this.personas.push(persona);
    }

    borrarTodasPersonas(){
        let EmptyPersona : Persona[] = [];
        this.personas = EmptyPersona;
    }
}