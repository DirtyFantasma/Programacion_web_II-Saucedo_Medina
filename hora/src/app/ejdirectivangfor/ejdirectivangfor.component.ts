import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivangfor.component.html',
  styleUrls: ['./ejdirectivangfor.component.css']
})
export class EjdirectivangforComponent implements OnInit {
materias: string[];
  constructor() {
    this.materias = ['Angular 8', 'Inteligencia artificial', 'Algoritmos'];
  }

  ngOnInit() {
  }

}
