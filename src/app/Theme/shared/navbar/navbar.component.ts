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

  ngOnInit() {
    this.changeNavColor();
    document.addEventListener('scroll', () => {
      this.changeNavColor();
    });
  }

  changeNavColor() {
    let header: any = document.querySelector('header');
    let topbar: any = document.querySelector('.top-bar');
    if (window.scrollY > topbar.offsetHeight) {
      header.style.backgroundColor = 'rgba(35, 31, 32,1)';
    } else {
      header.style.backgroundColor = 'rgba(35, 31, 32, 0.6)';
    }
  }
  sectionNav(route: string, sectionId: string) {
    this.router.navigate([route, sectionId]);
  }
}
