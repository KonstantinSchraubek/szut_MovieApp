import { Injectable } from '@angular/core';
import { Show } from '../classes/show';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private _shows: Show[] = [];

  constructor(public http: HttpClient) { }

  detailShow: Show = new Show();


  get shows(): Show[] {
    return this._shows;
  }

  async searchWithAPI(query: string) {
    try {
      const data = await this.http.get(`http://api.tvmaze.com/singlesearch/shows?q=` + query).toPromise();

      this._shows.push(new Show(data['id'], data['name'], data['summary'], data['image']['medium']));
    } catch (e) {

    }
  }

}
