import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  scrollToPosition(positionY: number) {
    window.scrollTo({
      top: positionY,
      behavior: 'smooth' 
    });
  }
}
