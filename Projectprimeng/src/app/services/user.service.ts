import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';


@Injectable()
export class UserService {

    private baseURL: string = 'localhost:8080/api';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });


    constructor(private _http: Http) { }

    getUsers() {

        return this._http.get(this.baseURL + '/users', this.options).map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        return
    }

}
