import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos'; // Import AOS
import SwiperCore, { SwiperOptions, Autoplay, Navigation } from 'swiper';
@Component({
  selector: 'app-marketing-business',
  templateUrl: './marketing-business.component.html',
  styleUrls: ['./marketing-business.component.css'],
})
export class MarketingBusinessComponent {
  constructor(private meta: Meta) {}
  // ===============================================
  hero: SwiperOptions = {
    modules: [Autoplay],
    autoplay: true,
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1400: {
        slidesPerView: 4,
        spaceBetween: -40,
      },
    },
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1.3,
      slideShadows: true,
    },
  };
  // ===============================================
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
        'Unleash the full potential of your brand with our marketing magic!',
    });
    this.meta.updateTag({
      name: 'title',
      content: 'Marketing & Business House',
    });
    this.scrollToTop();
    AOS.init({
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }
}
