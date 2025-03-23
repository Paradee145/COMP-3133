import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component'; // ✅ Import your standalone component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroesComponent], // ✅ Import it here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heroes';
}

