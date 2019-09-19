import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejedirectivangfor',
  templateUrl: './ejedirectivangfor.component.html',
  styleUrls: ['./ejedirectivangfor.component.css']
})
export class EjedirectivangforComponent {
  materias: string[];
  constructor(){
    this.materias = ['Angular 8', 'Intenligencia Artificial', 'Algoritmos'];
  }
}
