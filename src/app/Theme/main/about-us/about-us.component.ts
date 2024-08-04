import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SwiperCore, { SwiperOptions, Autoplay, Navigation } from 'swiper';
import * as AOS from 'aos'; // Import AOS

import { Meta } from '@angular/platform-browser';
SwiperCore.use([Navigation, Autoplay]);
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
})
export class AboutUsComponent {
  constructor(private route: ActivatedRoute, private meta: Meta) {}
  // ========= Swipper Angular =========
  chooseUs: SwiperOptions = {
    modules: [Navigation, Autoplay],
    autoplay: true,
    navigation: true,
    pagination: { clickable: true },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    spaceBetween: -150,
    slidesPerView: 2,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 1.3,
      slideShadows: true,
    },
  };
  // ====================================
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
      content:
        'From that spark, our business took off. We tackled websites, then apps, each project testing the limits of available technology and cultural awareness. We assembled teams of gifted developers, designers, and marketers, with each member contributing a special strength to the whole team.',
    });
    // =================================
    this.scrollToTop();
    this.route.params.subscribe((params) => {
      const sectionId = params['sectionId'];
      if (sectionId) {
        const element = document.querySelector(`#${sectionId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
    AOS.init({
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }
}
