import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchModel } from '../models/search.moldel';

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
        .append('format', 'json')
        .append('page', page)
        .append('limit', 30)
    };
   
    return this.http.get('https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks', options)
  }

  getTrackSearch(page: number, track: string, artist: string) : Observable<SearchModel> {
    const options = {
      params: new HttpParams()
        .append('format', 'json')
        .append('page', page)
        .append('limit', 30)
        .append('track', track)
        .append('artist', artist)
    };

    const body = {
      track: track, 
      artist: artist
    }
   
    return this.http.get('https://ws.audioscrobbler.com/2.0/?method=track.search',  options) as Observable<SearchModel>
  }
}
