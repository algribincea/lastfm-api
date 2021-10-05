import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, debounceTime, map, switchMap } from 'rxjs/operators';
import { ConfigService } from '../shared/services/config.service';
import { FormService } from '../shared/services/form.service';
import { QueriesService } from '../shared/services/queries.service';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  form = new FormGroup({
    track: new FormControl('', [Validators.required, Validators.maxLength(256), this.formS.noWhitespaceValidator]),
    artist: new FormControl('', Validators.maxLength(256)),
  });

  tracks: Observable<any>


  constructor(
    private queryS: QueriesService,
    private formS: FormService,
    public configS: ConfigService
  ) { }

  ngOnInit(): void {
  }

  searchTracks(page: number = 1) {

    if (this.form.valid) {
      const data = {
        track: this.form.controls.track.value,
        artist: this.form.controls.artist.value,
      }
      console.log(data);
      //  let data: any = this.form.valueChanges.pipe(debounceTime(500))
      //  console.log(data);
       
      //  .subscribe(selectedValue => {
      //   console.log('form value changed')
      //   console.log(selectedValue)
      // })

      this.tracks = this.queryS.getTrackSearch(page, data.track, data.artist)
        .pipe(
          map((val: any) => {
            let tracks = {}
            tracks['track'] = val.results.trackmatches.track
            tracks['pageInfo'] = {
              'currentPage': parseInt(val.results['opensearch:Query'].startPage),
              'itemsPerPage': parseInt(val.results['opensearch:itemsPerPage']),
              'totalItems': parseInt(val.results['opensearch:totalResults'])
            }
            console.log('pipe-map', tracks)
            return tracks
          })
        )

      console.log(this.tracks);
      
      // this.form.reset();
    } else {
      console.log('else', this.form);
      this.formS.validateAllFormFields(this.form);
    }
  }

  changePageNumber(event: number) {
    this.searchTracks(event)
  }

}
