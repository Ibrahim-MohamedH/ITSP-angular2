import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { JobCategory } from 'src/app/models/jobCategory';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobCategoryService {
  private url = 'https://dashboard.itsp-group.com/api/v1/';
  private jobsListUrl = `${this.url}jobs`;
  private jobsListByCatUrl = `${this.url}jobs?category_id=`;
  private levelsListUrl = `${this.url}job/level`;
  private typesListUrl = `${this.url}job/type`;
  private placesListUrl = `${this.url}job/place`;
  private applicationFormUrl = `${this.url}form`;
  constructor(private http: HttpClient) {}
  getJobsList(params?: any): Observable<any> {
    let queryParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        queryParams = queryParams.append(key, params[key]);
      });
    }
    return this.http.get(this.jobsListUrl, { params: queryParams });
  }
  getJobsListByCategory(id: string, params?: any): Observable<any> {
    let queryParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        queryParams = queryParams.append(key, params[key]);
      });
    }
    return this.http.get(`${this.jobsListByCatUrl}${id}`, {
      params: queryParams,
    });
  }
  getCitiesList(): Observable<any> {
    return this.http.get(`${this.url}citys`);
  }
  getJobById(id: string): Observable<any> {
    return this.http.get(`${this.jobsListUrl}/${id}`);
  }
  getLevelsList(): Observable<any> {
    return this.http.get(this.levelsListUrl);
  }
  getTypesList(): Observable<any> {
    return this.http.get(this.typesListUrl);
  }
  getPlacesList(): Observable<any> {
    return this.http.get(this.placesListUrl);
  }
  applyForm(data: any, params?: any): Observable<any> {
    let queryParams = new HttpParams();
    if (params) {
      Object.keys(params).forEach((key) => {
        queryParams = queryParams.append(key, params[key]);
      });
    }
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      const value = data[key];
      if (value !== null && value !== undefined) {
        if (Array.isArray(value)) {
          value.forEach((item: any, index: number) => {
            formData.append(`${key}[${index}]`, item);
          });
        } else {
          formData.append(key, value);
        }
      }
    });
    return this.http.post(this.applicationFormUrl, formData, {
      params: queryParams,
    });
  }
}
