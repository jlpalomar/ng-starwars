import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

const PEOPLE_API_URL = "https://swapi.co/api/people";

@Injectable()
export class SwapiService {

  constructor(private http:Http){

  }
  getPeopleList():Observable<any>{
    return this.http
      .get(PEOPLE_API_URL)
      .map((res:Response)=> res.json().results);
  }


}
