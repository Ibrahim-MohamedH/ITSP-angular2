import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private url = 'https://dashboard.itsp-group.com/api/v1/';
  private contactUrl = `${this.url}itsp`;
  constructor(private http: HttpClient) {}
  sendContactForm(data: Contact): Observable<any> {
    const formData = new FormData();
    (Object.keys(data) as Array<keyof Contact>).forEach((key) => {
      formData.append(key, data[key]);
    });
    return this.http.post(this.contactUrl, formData);
  }
}
