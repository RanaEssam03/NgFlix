import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private movieService: MoviesService){}

  // observable
  upcomingMovies$ = this.movieService.getMoviesByType('upcoming');
  topRatedMovies$ = this.movieService.getMoviesByType('top_rated');


}
