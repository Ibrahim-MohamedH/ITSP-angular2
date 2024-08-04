import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  currentLang: string;
  constructor(
    private router: Router,
    private translateService: TranslateService
  ) {
    this.currentLang = this.translateService.currentLang || 'en';
  }
  sectionNav(route: string, sectionId: string) {
    this.router.navigate([route, sectionId]);
  }
}
