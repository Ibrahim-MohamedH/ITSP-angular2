import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import * as AOS from 'aos'; // Import AOS
@Component({
  selector: 'app-software-house',
  templateUrl: './software-house.component.html',
  styleUrls: ['./software-house.component.css'],
})
export class SoftwareHouseComponent {
  constructor(private meta: Meta) {}
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
        'We “potential”, “Empower” and “Cultivate” your business with our transformative Software Solutions.',
    });
    this.meta.updateTag({
      name: 'title',
      content: 'Software House',
    });
    this.scrollToTop();
    AOS.init({
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }
}
