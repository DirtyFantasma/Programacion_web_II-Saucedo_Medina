import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangstyle',
  templateUrl: './ejdirectivangstyle.component.html',
  styleUrls: ['./ejdirectivangstyle.component.css']
})
export class EjdirectivangstyleComponent implements OnInit {
calificacion: number;
setColor() {
  return this.calificacion > 5 ? 'green' : 'red';
}
  constructor() { }

  ngOnInit() {
  }

}
