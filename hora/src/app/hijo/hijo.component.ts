import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
@Input() aviso: string;
leido: boolean = false;
marcar(event) {
  this.leido = !this.leido;
}

@Output() mensajeMarcado = new EventEmitter();
mensaje: string;
detectar(event) {
  this.mensaje = this.aviso;
  this.mensajeMarcado.emit(this.mensaje);
}
  constructor() { }

  ngOnInit() {
  }

}
