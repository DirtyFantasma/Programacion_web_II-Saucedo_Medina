import { Component, OnInit } from '@angular/core';
import { Alumno } from '../modelos/alumno.modelo'

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit {
  alumno1: Alumno;
  texto = 'Escribe algo';
  constructor() { setTimeout(() => {
    this.texto = 'Por favor'
  }, 3000); }

  ngOnInit() {
  }

}
