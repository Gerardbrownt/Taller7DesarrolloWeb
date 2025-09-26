import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-highlights',
  standalone: true,
  imports: [NgFor],
  templateUrl: './highlights.html',
  styleUrl: './highlights.css'
})
export class Highlights {
  items: Array<{ title: string; text: string }> = [
    { title: 'Heading 1', text: 'Contenido de ejemplo para la primera columna.' },
    { title: 'Heading 2', text: 'Otro bloque con texto placeholder.' },
    { title: 'Heading 3', text: 'Tercer bloque de ejemplo.' }
  ];
}
