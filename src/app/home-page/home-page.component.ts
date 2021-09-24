import { Component, HostListener, OnInit } from '@angular/core';
import { QueriesService } from '../shared/services/queries.service';
import { SsrService } from '../shared/services/ssr.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // sometimes pagination give errors

  tracks: any[] = [];
  pageInfo: any

  constructor(
    private _query: QueriesService,
    private ssr: SsrService
  ) { }

  ngOnInit(): void {
    this.getTopTracks(1);
  }

  getTopTracks(page: number) {
    this._query.getTopTracks(page).subscribe((data: any) => {
      this.tracks = []

      if (data && data.tracks) {
        this.pageInfo = {}
        this.pageInfo['itemsPerPage'] = parseInt(data.tracks['@attr'].perPage);
        this.pageInfo['currentPage'] = parseInt(data.tracks['@attr'].page);
        this.pageInfo['totalItems'] = parseInt(data.tracks['@attr'].total);
        this.tracks = data.tracks.track
      }
    })
  }

  changePageNumber(event: any) {
    this.pageInfo.currentPage = event;
    this.getTopTracks(event);
    if (this.ssr.isBrowser) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

}
