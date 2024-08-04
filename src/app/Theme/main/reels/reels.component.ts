import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reels',
  templateUrl: './reels.component.html',
  styleUrls: ['./reels.component.css'],
})
export class ReelsComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  sectionNav(route: string, sectionId: string) {
    this.router.navigate([route, sectionId]);
  }
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
    // ==========================================
    let showReel: any = document.querySelector('.bigScreen');
    let reel: any = document.querySelector('.bigScreen .showReel');
    let mainFrame: any = document.querySelector('.bigScreen iframe');
    let allReels: any = document.querySelectorAll(
      '#allReels .card img.card-img-top'
    );
    let covers: any = document.querySelectorAll('.blackout');

    if (allReels) {
      for (let i = 0; i < allReels.length; i++) {
        covers[i].addEventListener('click', () => {
          mainFrame.src = allReels[i].getAttribute('data-reelUrl');
          showReel.classList.remove('hidden');
        });
      }
      showReel.addEventListener('click', () => {
        console.log('hello');

        mainFrame.src = '';
        showReel.classList.add('hidden');
      });
    }
  }
}
