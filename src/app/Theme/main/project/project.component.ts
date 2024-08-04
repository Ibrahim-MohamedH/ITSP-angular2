import { Component } from '@angular/core';
import SwiperCore, { SwiperOptions, Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent {
  projects: SwiperOptions = {
    modules: [Autoplay],
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    loop: true,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        loop: true,
      },
      576: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 4,
      },
      1400: {
        slidesPerView: 5,
      },
    },
  };
  ngOnInit() {
    let mainImage: any = document.querySelector(`.main-image img`);
    let thumbImages: any = document.querySelectorAll('.thumb-images img');

    for (let i = 0; i < thumbImages.length; i++) {
      thumbImages[i].addEventListener('click', () => {
        let oldSource = mainImage.src;
        mainImage.src = thumbImages[i].src;
        thumbImages[i].src = oldSource;
      });
    }
  }
}
