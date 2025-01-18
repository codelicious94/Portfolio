import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private defaultLanguage = 'en';

  constructor(private translate: TranslateService) {
    const savedLanguage = localStorage.getItem('appLanguage') || this.defaultLanguage;
    this.setLanguage(savedLanguage);
  }

  setLanguage(language: string): void {
    this.translate.addLangs(['en', 'de']); // Unterstützte Sprachen
    this.translate.use(language);
    localStorage.setItem('appLanguage', language);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang || this.defaultLanguage;
  }
}
