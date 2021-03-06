import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw';
import{ Employee } from './domain/Employee'
@Injectable()
export class UserService {

    private baseURL: string = 'localhost:8080/api';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });


    constructor(private _http: Http) { }

    getUsers() {

        return this._http.get(this.baseURL + '/user', this.options).map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    createUser(emp:Employee)
    {
        return this._http.post(this.baseURL + '/user',JSON.stringify(emp), this.options).map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        return Observable.throw(error||"SERVER ERROR");
    }

}
