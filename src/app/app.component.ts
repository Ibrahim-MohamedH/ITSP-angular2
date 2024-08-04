import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ITSPAngular';
  ngOnInit() {
    // let theme: any = document.querySelector('.theme');
    // let themeBtn: any = document.querySelector('.themeBtn');
    // let scrollTop: any = document.querySelector('.scroll-top');
    // let currentTheme: any = localStorage.getItem('theme');
    // function light() {
    //   theme.href = theme.href.replace('dark', 'light');
    //   if (themeBtn.classList.contains('dark')) {
    //     themeBtn.classList.replace('dark', 'light');
    //   }
    // }
    // function dark() {
    //   theme.href = theme.href.replace('light', 'dark');
    //   if (themeBtn.classList.contains('light')) {
    //     themeBtn.classList.replace('light', 'dark');
    //   }
    // }
    // if (currentTheme) {
    //   if (currentTheme == 'dark') {
    //     dark();
    //   } else {
    //     light();
    //   }
    // }
    // function changeTheme() {
    //   if (themeBtn.classList.contains('light')) {
    //     dark();
    //     localStorage.setItem('theme', 'dark');
    //   } else {
    //     light();
    //     localStorage.setItem('theme', 'light');
    //   }
    // }
    // themeBtn.addEventListener('click', changeTheme);
    // scrollTop.addEventListener('click', () => {
    //   window.scrollTo({
    //     top: 0,
    //     behavior: 'smooth',
    //   });
    // });
  }
}
