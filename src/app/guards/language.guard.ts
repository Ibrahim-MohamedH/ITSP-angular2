import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageGuard {
  lang: any;
  constructor(private translate: TranslateService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    this.lang = next.params['lang'];
    if (this.lang === 'en' || this.lang === 'ar') {
      this.translate.use(this.lang);
      this.loadCSS(this.lang);
      return true;
    } else {
      this.router.navigate(['/en']);
      return false;
    }
  }

  loadCSS(lang: string) {
    const existingLinkElement = document.getElementById(
      'set-lang'
    ) as HTMLLinkElement;
    if (existingLinkElement) {
      existingLinkElement.remove();
    }
    let cssFilePath = '';
    if (lang == 'ar') {
      cssFilePath = 'assets/styles/ar.css';
    } else {
      cssFilePath = 'assets/styles/en.css';
    }
    if (cssFilePath) {
      const linkElement = document.createElement('link');
      linkElement.id = 'set-lang';
      linkElement.rel = 'stylesheet';
      linkElement.href = cssFilePath;
      document.head.appendChild(linkElement);
    }
  }
}
