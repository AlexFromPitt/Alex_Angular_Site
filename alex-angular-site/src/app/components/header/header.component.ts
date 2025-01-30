import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerButtons = [
    { buttonText: 'Home', icon: null, type: 'button', sectionId: 'home' },
    { buttonText: 'About Me', icon: null, type: 'button', sectionId: 'about-me' },
    { buttonText: 'Contact', icon: null, type: 'button', sectionId: 'contact' }
  ]

  constructor() {}

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error("Element not found:", sectionId);
    }
  }
}
