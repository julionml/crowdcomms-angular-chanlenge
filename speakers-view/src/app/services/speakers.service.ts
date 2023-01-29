import { HttpClient,HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {
  
  
  constructor(private http: HttpClient) { }

  public getSpeaksers(page = 1,results = 20):Observable<any>{

    let queryParams = new HttpParams();
    queryParams = queryParams.append('results', results);
    queryParams = queryParams.append('page', page);
    return this.http.get<any>('https://randomuser.me/api', { params: queryParams });
  }
}
