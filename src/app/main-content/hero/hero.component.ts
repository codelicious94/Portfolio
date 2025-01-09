import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  navigateToSection(destination: string): void {
    if (destination) {
      const target = document.querySelector(destination);
      if (target) {
        const yOffset = -150;
        const yPosition = target.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({
          top: yPosition,
          behavior: 'smooth'
        });
      } else {
        console.error(`Target not found: ${destination}`);
      }
    }
  }
}
