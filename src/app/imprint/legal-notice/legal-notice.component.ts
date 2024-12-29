import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}
