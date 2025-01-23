import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerButtons = [
    { buttonText: 'Home', icon: null, type: 'button' },
    { buttonText: 'About Me', icon: null, type: 'button' },
    { buttonText: 'Contact', icon: null, type: 'button' }
  ]

  constructor() {}
}
