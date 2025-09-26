import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

type Side = 'left' | 'right';

@Component({
  selector: 'app-featurettes',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './featurettes.html',
  styleUrl: './featurettes.css'
})
export class Featurettes {
  items: Array<{ title: string; subtitle: string; side: Side }> = [
    { 
      title: 'First featurette heading. It’ll blow your mind.',
      subtitle: 'Algo de texto de ejemplo para la primera featurette.',
      side: 'right' 
    },
    { 
      title: 'Oh yeah, it’s that good. See for yourself.',
      subtitle: 'Otra featurette: alterna la posición del bloque visual.',
      side: 'left' 
    },
    { 
      title: 'And lastly, this one. Checkmate.',
      subtitle: 'Última featurette con el bloque visual al lado contrario.',
      side: 'right' 
    }
  ];
}
