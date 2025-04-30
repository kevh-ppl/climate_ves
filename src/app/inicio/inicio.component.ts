import { Component, HostListener } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { QueEsComponent } from "../que-es/que-es.component";
import { StatisticsComponent } from "../statistics/statistics.component";
import { TimelineComponent } from "../timeline/timeline.component";
import { ActionComponent } from "../action/action.component";
import { FooterComponent } from "../footer/footer.component";
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [NavbarComponent, QueEsComponent, StatisticsComponent, TimelineComponent, ActionComponent, FooterComponent, RouterOutlet],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  selectedSection: any;

  constructor(private readonly router: Router) { }

  irASeccion(fragment: string) {
    this.router.navigate([], { fragment });
    this.selectedSection = fragment;
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const sections = document.querySelectorAll('[id^="section-"]');
    sections.forEach((section) => {
      const element = section as HTMLElement;
      if (this.isElementInViewport(element)) {
        this.selectedSection = element.id;
      }
    });
  }

  /** El método isElementInViewport devuelve true
  * si la parte superior del elemento es visible
  * en la parte superior del viewport, es decir,
  * cuando el elemento está dentro de la zona
  * visible de la pantalla, y false si no lo está.
  * @param el Elemento HTML del cual se desea saber si se encuentra dentro del viewport
  * @return {boolean}
  */
  isElementInViewport(el: HTMLElement): boolean {
    //Este método devuelve un objeto DOMRect
    // que contiene las coordenadas y
    // dimensiones del elemento en relación
    // con el viewport (la parte visible de la página).
    const rect = el.getBoundingClientRect();
    // rect.top es la distancia entre la parte superior del elemento
    // y la parte superior del viewport.
    // rect.bottom es la distancia entre la parte inferior del elemento
    // y la parte inferior del viewport
    return (
      rect.top >= 0 &&
      rect.top <= window.innerHeight / 1.5 // Asegurarse que esté visible en el centro pa arriba del viewport
    );
  }

}
