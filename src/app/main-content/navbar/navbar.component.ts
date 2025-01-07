import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  activeLink: string = '';
  isMenuOpen: boolean = false;

  setActive(link: string) {
    this.activeLink = link;
    this.closeMenu(); 
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto'; 
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = 'auto'; 
  }

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