import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
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
  selector: 'app-apply-form',
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css'],
})
export class ApplyFormComponent {
  currentLang: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jobService: JobCategoryService,
    private meta: Meta,
    private translateService: TranslateService
  ) {
    this.currentLang = this.translateService.currentLang || 'en';
  }
  loader: boolean = false;
  thankYouMessage: boolean = false;
  selectedImage: File | null = null;
  cvError!: string;
  selectedCV: File | null = null;
  images: { name: string; path: string; file?: File }[] = [];
  cv: { name: string; path: string; file?: File }[] = [];
  cities: any[] = [];
  jobId: string = '';
  @ViewChild('imageInput') imageInput!: ElementRef;
  @ViewChild('cvInput') cvInput!: ElementRef;
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
    image: new FormControl<File | null>(null, Validators.required),
    cv: new FormControl<File | null>(null, Validators.required),
  });
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
      content: 'Apply for the position of your life!',
    });
    this.meta.removeTag("name='title'");
    this.scrollToTop();
    this.getCities();
    this.activatedRoute.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.jobId = id;
      }
    });
  }
  // ===============================================
  onimageChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedImage = file;
      this.images = [
        { name: file.name, path: URL.createObjectURL(file), file: file },
      ]; // new change
      // Update the image control value with the selected file
      this.applicationForm.get('image')?.setValue(file); // new change
    }
  }
  onCvChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      if (file.type == 'application/pdf') {
        console.log('soething');
        this.selectedCV = file;
        this.cv = [
          { name: file.name, path: URL.createObjectURL(file), file: file },
        ]; // new change
        // Update the image control value with the selected file
        this.applicationForm.get('cv')?.setValue(file); // new change
        console.log(file);
      } else {
        this.cvError = 'You must upload a pdf file';
        this.cvInput.nativeElement.value = '';
      }
    }
  }
  // ===============================================
  onSubmit() {
    if (this.applicationForm.valid) {
      this.loader = true;
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
          this.thankYouMessage = true;
          this.loader = false;
        },
        error: (error) => {
          console.error('error', error);
          this.loader = false;
        },
      });
    }
  }
}
