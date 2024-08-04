import { JobCategoryService } from './../../../controllers/services/job-category.service';
import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import * as AOS from 'aos'; // Import AOS
@Component({
  selector: 'app-job-available',
  templateUrl: './job-available.component.html',
  styleUrls: ['./job-available.component.css'],
})
export class JobAvailableComponent {
  categoryId!: string;
  currentPage!: number;
  totalPages!: number;
  loading: boolean = true;
  total!: number;
  jobs: any[] = [];
  category!: string;
  searchQuery: string = '';
  slogan!: string;
  currentLang: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private jobServices: JobCategoryService,
    private meta: Meta,
    private translateService: TranslateService
  ) {
    this.currentLang = this.translateService.currentLang || 'en';
  }

  getJobsList(page: number = 1) {
    this.jobServices
      .getJobsListByCategory(this.categoryId, { page: page })
      .subscribe({
        next: (response) => {
          this.loading = false;
          this.jobs = response.data.data;
          this.currentPage = response.data.current_page;
          this.totalPages = response.data.last_page;
          this.total = response.data.total;
        },
        error: (error) => {
          console.error('There was an error!', error);
        },
      });
  }
  onPageChange(page: number) {
    this.getJobsList(page);
  }
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
        'Start your career with us, See which position is vacant at ITSP',
    });
    this.meta.updateTag({
      name: 'title',
      content: 'Available Positions',
    });
    this.scrollToTop();
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.categoryId = id;
        this.getJobsList();
      }
    });

    // ==============================
    AOS.init({
      easing: 'ease-in-out',
      once: false,
      mirror: true,
    });
  }
}
