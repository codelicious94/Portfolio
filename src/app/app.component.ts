import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';
import AOS from 'aos';
import 'aos/dist/aos.css';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FooterComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'de']);
    const savedLanguage = localStorage.getItem('appLanguage') || 'en'; 
    this.translate.setDefaultLang(savedLanguage);
    this.translate.use(savedLanguage).subscribe(() => {
      console.log(`Sprache erfolgreich geladen: ${savedLanguage}`);
    });
  }

  ngOnInit(): void {
    AOS.init({
      offset: 300,
      easing: 'ease-in-out',
      duration: 800,
      delay: 100,
      mirror: false
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    // AOS-Refresh bei Scroll
    AOS.refresh();
  }
}  

export function HttpLoaderFactory() {
  const http = inject(HttpClient);
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
