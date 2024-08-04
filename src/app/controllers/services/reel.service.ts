import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';
import { Reels } from 'src/app/models/reels';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ReelService extends ApiFunctionService<Reels> {
  constructor(http: HttpClient) {
    super(http, '');
  }
}
