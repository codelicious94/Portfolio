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
    const adjustedPosition = this.getAdjustedPosition(screenWidth, positionY);
  
    window.scrollTo({
      top: adjustedPosition,
      behavior: 'smooth'
    });
  }
  
  getAdjustedPosition(screenWidth: number, positionY: number): number {
    if (screenWidth >= 1200 && screenWidth < 1350) {
      return this.getPositionForLargeScreens(positionY);
    } else if (screenWidth < 1200 && screenWidth > 650) {
      return this.getPositionForMediumScreens(positionY);
    } else if (screenWidth <= 650 && screenWidth > 450) {
      return this.getPositionForSmallScreens(positionY);
    } else if (screenWidth <= 450) {
      return this.getPositionForExtraSmallScreens(positionY);
    }
    return positionY; 
  }
  
  getPositionForLargeScreens(positionY: number): number {
    switch (positionY) {
      case 800:
        return 1200;
      case 1700:
        return 2100;
      case 2500:
        return 2900;
      default:
        return positionY;
    }
  }
  
  getPositionForMediumScreens(positionY: number): number {
    switch (positionY) {
      case 800:
        return 1200;
      case 1700:
        return 2000;
      case 2500:
        return 3300;
      default:
        return positionY;
    }
  }
  
  getPositionForSmallScreens(positionY: number): number {
    switch (positionY) {
      case 800:
        return 1000;
      case 1700:
        return 1700;
      case 2500:
        return 3100;
      default:
        return positionY;
    }
  }
  
  getPositionForExtraSmallScreens(positionY: number): number {
    switch (positionY) {
      case 800:
        return 750;
      case 1700:
        return 1600;
      case 2500:
        return 2950;
      default:
        return positionY;
    }
  }
}
