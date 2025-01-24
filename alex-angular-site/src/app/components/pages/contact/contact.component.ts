import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  title: string = '';

  constructor() {}

  ngOnInit() {
    this.title = 'Contact';
  }
}
