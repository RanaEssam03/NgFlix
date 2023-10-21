import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDto } from '../types/movie';


@Injectable()
export class MoviesService {

  constructor(private http: HttpClient) { }
  getPopularMovies(){
    return this.http
    .get<MovieDto>(
      'https://api.themoviedb.org/3/movie/popular?api_key=65b014d04ac2a83e9528956178d78602'
    )
  }
}
