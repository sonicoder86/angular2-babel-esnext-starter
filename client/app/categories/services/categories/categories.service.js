import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { RequestService } from '../../../auth';

@Injectable()
export class CategoriesService {

  remoteCategories = new BehaviorSubject([]);

  constructor(http: Http, request: RequestService) {
    this._http = http;
    this._request = request;
  }


  refreshCategories() {
    let url =  '/categories';
    let categoriesResponse = this._http.get(url)
      .map(res => res.json());

    categoriesResponse.subscribe(
        (list) => {
          this.remoteCategories.next(list);
        },
        (error) => {
          console.error(error);
        }
      );

    return categoriesResponse;
  }
}
