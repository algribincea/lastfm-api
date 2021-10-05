import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  
  autoHide: boolean = false;
  responsive: boolean = true;
  maxSize: number = 8;
  previousLabel="Prev";
  nextLabel="Next";

  constructor() { }
}
