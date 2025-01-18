import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './legal-notice.component.html',
  styleUrls: ['./legal-notice.component.scss']
})
export class LegalNoticeComponent {
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
