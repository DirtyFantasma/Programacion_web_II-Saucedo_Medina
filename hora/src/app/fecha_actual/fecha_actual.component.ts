import { Component } from '@angular/core';
@Component({
    selector: 'app-fechaactual',
    templateUrl: './fecha_actual.component.html'
})
export class Fecha_ActualComponent {
    hoy: any = new Date ();
}