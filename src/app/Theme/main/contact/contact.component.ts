import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ContactService } from 'src/app/controllers/services/contact.service';
import { Contact } from 'src/app/models/contact';

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
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  currentLang: string;
  thankYouMessage: boolean = false;
  loader: boolean = false;

  contactForm = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    position: new FormControl<string>('', Validators.required),
    company: new FormControl<string>('', Validators.required),
    phone: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    needs: new FormControl<string>('', Validators.required),
    other: new FormControl<string>(''),
  });
  constructor(
    private contactService: ContactService,
    private router: Router,
    private meta: Meta,
    private translateService: TranslateService
  ) {
    this.currentLang = this.translateService.currentLang || 'en';
  }
  submit() {
    if (this.contactForm.valid) {
      this.loader = true;
      const payload: Contact = {
        name: this.contactForm.controls['name'].value || '',
        position: this.contactForm.controls['position'].value || '',
        company: this.contactForm.controls['company'].value || '',
        phone: this.contactForm.controls['phone'].value || '',
        email: this.contactForm.controls['email'].value || '',
        needs: this.contactForm.controls['needs'].value || '',
        other: this.contactForm.controls['other'].value || '',
      };
      this.contactService.sendContactForm(payload).subscribe({
        next: (response) => {
          this.thankYouMessage = true;
          this.loader = false;
        },
        error: (error) => {
          console.error('There was an error!', error);
          this.loader = false;
        },
      });
    }
  }
  close() {
    this.thankYouMessage = false;
    this.router.navigate(['/home']);
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
      content: 'LETS WORK TOGETHER & MAKE A BETTER WORLD',
    });
    this.meta.updateTag({
      name: 'title',
      content: 'Contact Us',
    });
    this.scrollToTop();
  }
}
