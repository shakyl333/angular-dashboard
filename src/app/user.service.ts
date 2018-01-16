import { Injectable } from '@angular/core';
// import {HttpModule, Http,Response,Headers,RequestOptions} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';



@Injectable()
export class UserService {
  public jsons;
  public user: User;
  posts_Url: string = 'http://localhost/my-angular-app/php_api/users/user-add.php';
  constructor(private http: HttpClient) {
  }

  saveUser(user){

    this.getData(this.posts_Url,user).then((response) => {
      console.log(response)
    });
  }

  getData(url,user): Promise<any> {
    // console.log(user);
    let headers = new HttpHeaders({});
    return this.http
      .post(url, JSON.stringify(user),{headers})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }
  
  private extractData(res: any) {
    let body = res;
    return body || {};
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}