import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { QueEsComponent } from "../que-es/que-es.component";

@Component({
  selector: 'app-inicio',
  imports: [NavbarComponent, QueEsComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
