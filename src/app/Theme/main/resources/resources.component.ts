import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SwiperCore, { SwiperOptions, Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css'],
})
export class ResourcesComponent {
  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe((params) => {
      const sectionId = params['sectionId'];
      if (sectionId) {
        const element = document.querySelector(`#${sectionId}`);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  }
  caseStudy: SwiperOptions = {
    modules: [Autoplay],
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 20,
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        loop: true,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  };
  // Blog: SwiperOptions = {
  //   modules: [Autoplay],
  //   autoplay: {
  //     delay: 2100,
  //     disableOnInteraction: false,
  //   },
  //   loop: true,
  //   spaceBetween: 10,
  //   // Responsive breakpoints
  //   breakpoints: {
  //     320: {
  //       slidesPerView: 1,
  //       loop: true,
  //     },
  //     576: {
  //       slidesPerView: 2,
  //     },
  //     992: {
  //       slidesPerView: 3,
  //     },
  //   },
  // };
}
