import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule], // Import RouterModule here
  template: `
    <nav class="navigation">
      <a class="navigation__link" routerLink="/">Calculator</a>
      <a class="navigation__link" routerLink="/about">About</a>
    </nav>
    <router-outlet></router-outlet> <!-- This is now recognized -->
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
