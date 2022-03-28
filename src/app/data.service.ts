import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  url = 'https://swapi.dev/api/people/';

  constructor(private http : HttpClient) { }

  getUserData()
  {
    return this.http.get(this.url);
    
  }
}