import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { QueEsComponent } from "../que-es/que-es.component";
import { StatisticsComponent } from "../statistics/statistics.component";
import { TimelineComponent } from "../timeline/timeline.component";

@Component({
  selector: 'app-inicio',
  imports: [NavbarComponent, QueEsComponent, StatisticsComponent, TimelineComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
