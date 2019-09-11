import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejmetodo',
  templateUrl: './ejmetodo.component.html',
  styleUrls: ['./ejmetodo.component.css']
})
export class EjmetodoComponent implements OnInit {
 
  puntuacion = 0;
  getpuntuacion (){
    return this.puntuacion;
  }
  constructor() { }

  ngOnInit() {
  }

}
