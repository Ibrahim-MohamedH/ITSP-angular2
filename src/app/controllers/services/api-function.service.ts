import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiFunctionService<T> {
  constructor(
    private http: HttpClient,
    @Inject(String) private configURL: string
  ) {}
  get(): Observable<T> {
    return this.http.get<T>(this.configURL);
  }
  getById(id: number): Observable<T> {
    return this.http.get<T>(this.configURL + id);
  }
  post(object: T): Observable<T> {
    return this.http.post<T>(this.configURL, object);
  }
  delete(id: number): Observable<T> {
    return this.http.delete<T>(this.configURL + id);
  }
  put(id: number, object: T): Observable<T> {
    return this.http.put<T>(this.configURL + id, object);
  }
}
