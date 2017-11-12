import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

    name: string;
    age: number;

email: string;
    address: Address;
    hobbies: string[];
    hello: any;
    posts: Post[];
    isEdit: boolean = false;


    constructor() {
        console.log('constructor ran..');
    }

    ngOnInit() {
    }

}


interface Address {
    street: string,
    city: string,
    state: string
}

interface Post {
    id: number,
    title: string,
    body: string,
    userId: number
}
