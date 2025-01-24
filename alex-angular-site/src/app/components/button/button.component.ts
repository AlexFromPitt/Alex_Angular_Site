import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() buttonText: string = '';
  @Input() icon: string | null = null;
  @Input() type: string = 'button';
  @Input() onClick: Function = () => {};

  constructor() {}

  handleClick() {
    if (this.onClick) {
      console.log("Button clicked.");
      this.onClick();
    }
  }
}
