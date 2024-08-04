import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { Projects } from 'src/app/models/projects';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProjectService extends ApiFunctionService<Projects> {
  constructor(http: HttpClient) {
    super(http, 'https://1a53-156-193-127-61.ngrok-free.app/api/v1/projects');
  }
}
