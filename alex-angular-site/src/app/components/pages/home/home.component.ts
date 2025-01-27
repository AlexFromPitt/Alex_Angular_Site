import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homeHeading: string = "Hi, I\'m Alex Mitro"
  homeDescription: string = "I'm a Software Engineer from the Pittsburgh area with experience as a Full Stack Developer, and Embedded Software Engineer."
  imagePath = 'assets/portrait_1.png';

  constructor() {}
}
