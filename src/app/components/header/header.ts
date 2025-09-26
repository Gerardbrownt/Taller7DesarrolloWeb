import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgFor],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  items: Array<{ text: string; active: boolean; disabled: boolean }> = [
    { text: 'Home', active: true, disabled: false },
    { text: 'Link', active: false, disabled: false },
    { text: 'Disabled', active: false, disabled: true }
  ];
}
