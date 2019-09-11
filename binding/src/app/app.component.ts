import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
imports: [BrowserModule, FormsModule
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';
}
