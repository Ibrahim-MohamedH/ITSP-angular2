import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos'; // Import AOS
@Component({
  selector: 'app-digital-marketing',
  templateUrl: './digital-marketing.component.html',
  styleUrls: ['./digital-marketing.component.css'],
})
export class DigitalMarketingComponent {
  currentLang: string;
  constructor(private meta: Meta, private translateService: TranslateService) {
    this.currentLang = this.translateService.currentLang || 'en';
  }
  scrollToTop(): void {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }
  ngOnInit() {
    this.meta.updateTag({
      name: 'description',
      content: "Unleash Your Brand's Digital Superpowers with ITSP!",
    });
    this.meta.updateTag({
      name: 'title',
      content: 'Digital Marketing House',
    });
    this.scrollToTop();
    AOS.init({
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }
}
