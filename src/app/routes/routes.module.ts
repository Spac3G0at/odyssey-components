import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { MoviesComponent } from '../movies/movies.component';

const ROUTES: Routes = [
	{ path: 'user', component: UserProfileComponent },
	{ path: 'sign-up', component: SignUpComponent },
	{ path: 'movies', component: MoviesComponent },
	{ path: '**', redirectTo: 'sign-up' }
];

export { ROUTES };
@NgModule({
	imports: [
		CommonModule
	],
	declarations: [],
	exports: [ROUTES]
})
export class RoutesModule { }
