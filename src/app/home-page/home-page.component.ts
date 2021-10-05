import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from '../shared/services/config.service';
import { QueriesService } from '../shared/services/queries.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  tracks: Observable<any>

  constructor(
    private queryS: QueriesService,
    public configS: ConfigService
  ) { }

  ngOnInit(): void {
    this.getTopTracks(1);
  }

  getTopTracks(page: number) {
    this.tracks = this.queryS.getTopTracks(page).pipe(
      map((val: any) => {
        let tracks = {}
        tracks['track'] = val.tracks.track
        tracks['pageInfo'] = {
          'currentPage': parseInt(val.tracks['@attr'].page),
          'itemsPerPage': parseInt(val.tracks['@attr'].perPage),
          'totalItems': parseInt(val.tracks['@attr'].total)
        }
        return tracks
      }))
  }

  changePageNumber(event: number) {
    this.getTopTracks(event);
  }

}
