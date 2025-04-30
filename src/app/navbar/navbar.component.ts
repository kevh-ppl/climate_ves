import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  menuAbierto = false;
  selectedSection: string = "";

  constructor(private readonly router: Router) { }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  irASeccion(fragment: string) {
    this.router.navigate([], { fragment });
    this.selectedSection = fragment;
  }

}
