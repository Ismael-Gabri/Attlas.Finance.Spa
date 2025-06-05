import { Component } from '@angular/core';
import 'boxicons';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  open = true;

  toggleMenu() {
    this.open = !this.open;
  }
}
