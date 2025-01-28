import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { AboutMeComponent, ContactComponent, HomeComponent } from './components/pages';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, AboutMeComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'alex-angular-site';
}
