import { AboutUsComponent } from './../../main/about-us/about-us.component';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  currentLang: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private translateService: TranslateService
  ) {
    this.currentLang = this.translateService.currentLang || 'en';
  }

  sectionNav(route: string, sectionId: string) {
    this.router.navigate([route, sectionId]);
  }
}
