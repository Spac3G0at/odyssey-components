import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-movies',
	templateUrl: './movies.component.html',
	styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

	showMovies = true;
	movies: any[];

	constructor() { }

	ngOnInit() {
		this.movies = [
			{
				title: 'The Godfather [Film Series]',
				imageUrl: 'https://www.listchallenges.com/f/items/c8c693e5-c06c-456c-ab66-40cf4ee7ba47.jpg'
			},
			{
				title: 'The Shawshank Redemption (1994)',
				imageUrl: 'https://image.tmdb.org/t/p/w185/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg'
			},
			{
				title: 'Gone With the Wind (1939)',
				imageUrl: 'https://image.tmdb.org/t/p/w185/4o1yeosjSFMaI9pe1rOkYcZ6hHO.jpg'
			},
			{
				title: 'Casablanca (1942)',
				imageUrl: 'https://image.tmdb.org/t/p/w185/wOBKAoUJZb5qTsWv5XXvVV2vUzz.jpg'
			},
			{
				title: 'It\'s a Wonderful Life (1946)',
				imageUrl: 'https://image.tmdb.org/t/p/w185/qZJ6d1SDsfoztmBfStwkBeTaOwG.jpg'
			},
			{
				title: 'Schindler\'s List (1993)',
				imageUrl: 'https://image.tmdb.org/t/p/w185/yPisjyLweCl1tbgwgtzBCNCBle.jpg'
			},
			{
				title: 'Star Wars [Film Series]',
				imageUrl: 'https://www.listchallenges.com/f/items/e7733e90-800d-479c-aecc-8b3e042a21dc.jpg'
			},
			{
				title: 'Rear Window (1954)',
				imageUrl: 'https://image.tmdb.org/t/p/w185/fjIVHiAaBUEtBbHgRLoTgeY8Ter.jpg'
			}
		];
	}

	toogleMovies() {
		this.showMovies = !this.showMovies;
	}

}
