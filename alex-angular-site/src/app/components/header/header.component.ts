import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  headerButtons = [
    { buttonText: 'Home', icon: null, type: 'button', path: '/home' },
    { buttonText: 'About Me', icon: null, type: 'button', path: '/about-me' },
    { buttonText: 'Contact', icon: null, type: 'button', path: '/contact' }
  ]

  constructor(private router: Router) {}

  redirectTo(redirectUrl: string) {
    this.router.navigate([redirectUrl])
  }
}
