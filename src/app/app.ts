import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { HeroCarousel } from './components/hero-carousel/hero-carousel';
import { Highlights } from './components/highlights/highlights';
import { Featurettes } from './components/featurettes/featurettes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, HeroCarousel, Highlights, Featurettes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}
