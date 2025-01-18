import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.scss'
})
export class PrivacyPolicyComponent {
  constructor(
    private viewportScroller: ViewportScroller,
    private translate: TranslateService 
  ) {}

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);

    const savedLanguage = localStorage.getItem('appLanguage') || 'en';
    this.translate.use(savedLanguage);
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
    localStorage.setItem('appLanguage', language); 
  }
}
