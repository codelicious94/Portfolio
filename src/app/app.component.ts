import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateService } from '@ngx-translate/core';


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
}  

export function HttpLoaderFactory() {
  const http = inject(HttpClient);
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
