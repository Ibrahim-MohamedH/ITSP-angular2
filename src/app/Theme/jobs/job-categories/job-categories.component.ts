import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos'; // Import AOS
@Component({
  selector: 'app-job-categories',
  templateUrl: './job-categories.component.html',
  styleUrls: ['./job-categories.component.css'],
})
export class JobCategoriesComponent {
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
      content: 'Push boundaries, unlock potential. Career growth starts here!',
    });
    this.meta.updateTag({
      name: 'title',
      content: 'Jobs categories',
    });
    this.scrollToTop();
    AOS.init({
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }
}
