import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  title: string = 'About Me';
  summary: string = "I\’m a software engineer from Pittsburgh, Pennsylvania, passionate about technology and continuous learning. A University of Pittsburgh graduate with a Bachelor’s in Computer Science, I bring over seven years of professional experience spanning the software development lifecycle. I’m seeking opportunities to contribute to meaningful projects that challenge me to grow and refine my skills. My philosophy is rooted in collaboration, innovation, and making a positive impact."
  imagePath = 'assets/portrait_1.png';
  
  constructor() {}

  ngOnInit() {
  }
}
