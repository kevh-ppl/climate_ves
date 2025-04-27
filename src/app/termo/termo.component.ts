import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-termo',
  imports: [FormsModule, MatSliderModule, CommonModule],
  templateUrl: './termo.component.html',
  styleUrl: './termo.component.css'
})
export class TermoComponent {

  temperatura = 1.2;
  colorTermometro = 'verde';

  actualizarColor() {
    if (this.temperatura < 1.5) {
      this.colorTermometro = 'verde';
    } else if (this.temperatura >= 1.5 && this.temperatura < 3) {
      this.colorTermometro = 'amarillo';
    } else {
      this.colorTermometro = 'rojo';
    }
  }
}
