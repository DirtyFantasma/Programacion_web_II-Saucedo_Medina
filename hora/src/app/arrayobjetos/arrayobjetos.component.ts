import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo';

@Component({
  selector: 'app-arrayobjetos',
  templateUrl: './arrayobjetos.component.html',
  styleUrls: ['./arrayobjetos.component.css']
})
export class ArrayobjetosComponent {
  
  public alumnos: Array<Alumno> = [
    {id: 1, nombre: 'juan', apellidos: 'camaney', ciudad: 'Los Mochis'},
    {id: 2, nombre: 'pedro', apellidos: 'infante' , ciudad: 'Guamuchil'}
  ];
}
