import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { JobCategoryService } from 'src/app/controllers/services/job-category.service';

export function phoneNumberValidator(
  control: FormControl
): ValidationErrors | null {
  const value = control.value;
  const phoneNumberPattern = /^[0-9]{11}$/;

  if (!value) {
    return null;
  }

  return phoneNumberPattern.test(value) ? null : { invalidPhoneNumber: true };
}

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent {
  loader: boolean = true;
  thankYouMessage: boolean = false;
  selectedImage: File | null = null;
  selectedCV: File | null = null;
  images: { name: string; path: string; file?: File }[] = [];
  cv: { name: string; path: string; file?: File }[] = [];
  jobId: string = '';
  job: any = '';
  discription: string[] = [];
  requirments: string[] = [];
  levels: string[] = [];
  types: string[] = [];
  places: string[] = [];
  cities: any[] = [];
  errorMessage: string = '';
  apply: boolean = false;
  // category_name!: string;
  // category_description!: string;
  @ViewChild('imageInput') imageInput!: ElementRef;
  @ViewChild('cvInput') cvInput!: ElementRef;
  currentLang: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jobService: JobCategoryService,
    private title: Title,
    private meta: Meta,
    private translateService: TranslateService
  ) {
    this.currentLang = this.translateService.currentLang || 'en';
  }
  // =============================================
  // =============================================
  getCities() {
    this.jobService.getCitiesList().subscribe({
      next: (response: any) => {
        this.cities = response.data.data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
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
      content: 'Vacancy Job',
    });
    this.meta.removeTag('name="title"');
    this.scrollToTop();
    this.getCities();
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.jobId = id;
        this.jobService.getJobById(id).subscribe({
          next: (response: any) => {
            this.loader = false;
            this.job = response.data;
            this.discription = this.job.discription.split('\n');
            this.requirments = this.job.requirments.split('\n');
            this.title.setTitle('ITSP | ' + this.job.postion);
            // this.category_name = response.data.category.name;
            // this.category_description = response.data.category.description;
          },
          error: (error) => {
            console.error('There was an error!', error);
            this.loader = false;
          },
        });
      }
    });
    // get All job Levels
    this.jobService.getLevelsList().subscribe({
      next: (response: any) => {
        this.levels = response.data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
    // get All job Types
    this.jobService.getTypesList().subscribe({
      next: (response: any) => {
        this.types = response.data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
    // get All job Places
    this.jobService.getPlacesList().subscribe({
      next: (response: any) => {
        this.places = response.data;
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }
  // =============================================
  applicationForm = new FormGroup({
    first_name: new FormControl<string>('', Validators.required),
    last_name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phone: new FormControl<string>('', [
      Validators.required,
      phoneNumberValidator,
    ]),
    area: new FormControl<string>('', Validators.required),
    city_id: new FormControl<string>('', Validators.required),
    birthday: new FormControl<string>('', Validators.required),
    gender: new FormControl<string>('', Validators.required),
    image: new FormControl<File | null>(null),
    cv: new FormControl<File | null>(null),
  });
  // showApply() {
  //   this.apply = true;
  // }
  // ===============================================
  onimageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.images = [
        { name: file.name, path: URL.createObjectURL(file), file: file },
      ]; // new change
      this.imageInput.nativeElement.value = '';
      // Update the image control value with the selected file
      this.applicationForm.get('image')?.setValue(file); // new change
    }
  }
  onCvChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedCV = file;
      this.cv = [
        { name: file.name, path: URL.createObjectURL(file), file: file },
      ]; // new change
      this.cvInput.nativeElement.value = '';
      // Update the image control value with the selected file
      this.applicationForm.get('cv')?.setValue(file); // new change
    }
  }
  // ===============================================
  onSubmit() {
    if (
      this.applicationForm.valid &&
      this.selectedImage != null &&
      this.selectedCV != null
    ) {
      const payload: any = {
        first_name: this.applicationForm.controls['first_name'].value,
        last_name: this.applicationForm.controls['last_name'].value,
        email: this.applicationForm.controls['email'].value,
        phone: this.applicationForm.controls['phone'].value,
        job_id: this.jobId,
        area: this.applicationForm.controls['area'].value,
        city_id: this.applicationForm.controls['city_id'].value,
        birthday: this.applicationForm.controls['birthday'].value,
        gender: this.applicationForm.controls['gender'].value,
        image: this.selectedImage,
        cv: this.selectedCV,
      };
      this.jobService.applyForm(payload).subscribe({
        next: (res) => {
          this.apply = false;
          this.thankYouMessage = true;
        },
        error: (error) => {
          console.error('error', error);
        },
      });
    }
  }
  close() {
    this.apply = false;
  }
}
