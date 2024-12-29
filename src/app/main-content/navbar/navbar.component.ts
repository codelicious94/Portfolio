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

  scrollToPosition(positionY: number) {
    const screenWidth = window.innerWidth;
    let adjustedPosition = positionY;
  
    if (screenWidth >= 1200 && screenWidth < 1350) {
      if (positionY === 800) {
        adjustedPosition = 1200; 
      } else if (positionY === 1700) {
        adjustedPosition = 2100; 
      } else if (positionY === 2500) {
        adjustedPosition = 2900; 
      }
    }

    else if (screenWidth < 1200 && screenWidth > 650) {
      if (positionY === 800) {
        adjustedPosition = 1200; 
      } else if (positionY === 1700) {
        adjustedPosition = 2000; 
      } else if (positionY === 2500) {
        adjustedPosition = 3300;
      }
    }

    else if (screenWidth <= 650 && screenWidth > 450) {
      if (positionY === 800) {
        adjustedPosition = 1000; 
      } else if (positionY === 1700) {
        adjustedPosition = 1700; 
      } else if (positionY === 2500) {
        adjustedPosition = 3100; 
      }
    }

    else if (screenWidth <= 450) {
      if (positionY === 800) {
        adjustedPosition = 750; 
      } else if (positionY === 1700) {
        adjustedPosition = 1600; 
      } else if (positionY === 2500) {
        adjustedPosition = 2950; 
      }
    }
  
    window.scrollTo({
      top: adjustedPosition,
      behavior: 'smooth'
    });
  }
}
