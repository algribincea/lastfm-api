import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueriesService {

  constructor(
    private http: HttpClient
  ) { }

  getTopTracks(page: number) {
    const options = {
      params: new HttpParams()
        // .append('api_key', 'c3749f45ccef5f59e33fea1f1b87c1ad')
        .append('format', 'json')
        .append('page', page)
        .append('limit', 30)
    };
   
    return this.http.get('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks', options)
  }
}
