import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDto } from '../types/movie';
import { map } from 'rxjs';

@Injectable()
export class MoviesService {
  private baseUrl = 'https://api.themoviedb.org/3';
  private apiKey = '65b014d04ac2a83e9528956178d78602';

  constructor(private http: HttpClient) {}
  getMoviesByType(type: string){
    return this.http.get<MovieDto>(
      `${this.baseUrl}/movie/${type}?api_key=${this.apiKey}`
    ).pipe(map((data)=> data.results)   );
  }

}
