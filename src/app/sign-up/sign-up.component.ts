import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

	email: string;

	constructor() { }

	ngOnInit() {
		this.email = 'monEmail@mail.com';
	}

}
