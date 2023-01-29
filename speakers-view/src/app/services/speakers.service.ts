import { HttpClient,HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SpeakersInterface } from '../models/speakers.interface';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {
  
  
  constructor(private http: HttpClient) { }

  public getSpeaksers():Observable<any>{

    let queryParams = new HttpParams();
    queryParams = queryParams.append('results', 40);
    queryParams = queryParams.append('page', 3);
    return this.http.get<SpeakersInterface>('https://randomuser.me/api', { params: queryParams });
  }
}
