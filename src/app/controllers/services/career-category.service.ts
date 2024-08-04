import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { CareerCategory } from 'src/app/models/careerCategories';

@Injectable({
  providedIn: 'root',
})
export class CareerCategoryService extends ApiFunctionService<CareerCategory> {
  constructor(http: HttpClient) {
    super(http, '');
  }
}
