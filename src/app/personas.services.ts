import { Persona } from './personas.model';

export class PersonasServices {
    personas: Persona[] = [new Persona("Alexander","Valdes"), new Persona("Susana","valdes")];

    agregarPersona(persona: Persona){
        this.personas.push(persona);
    }
}