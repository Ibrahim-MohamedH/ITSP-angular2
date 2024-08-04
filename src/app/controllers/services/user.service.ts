import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { Users } from 'src/app/models/users';

@Injectable({
  providedIn: 'root',
})
export class UserService extends ApiFunctionService<Users> {
  constructor(http: HttpClient) {
    super(http, 'https://b6e6-156-193-118-55.ngrok-free.app/api/v1/applicant');
  }
}
